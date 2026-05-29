# Zentronix Performance Audit & Optimization Guide

Last updated: May 2026

## Executive summary

| Area | Before | After (expected) |
|------|--------|------------------|
| Home route | Full client (`"use client"` + `ssr: false` on all sections) | **Server Component** shell + code-split sections with SSR |
| Hero JS | Full `framer-motion` + WebGL SSR attempt | **LazyMotion** + WebGL `ssr: false`, reduced motion respected |
| SEO | Minimal metadata | **Open Graph**, Twitter, canonical, `robots.ts`, `sitemap.ts` |
| API | Module-level SDK init, throws at import | **Lazy init**, validation, `no-store` cache headers |
| Unused deps | ~4 unused packages | Removed (`motion`, `@google/genai`, `locomotive-scroll`, `react-icons`) |
| Static assets | Default caching | **Long-cache** headers for `/images`, `/vedio`, `/_next/static` |

Target: **Lighthouse 95+** on Performance, SEO, Accessibility, Best Practices after image compression and `NEXT_PUBLIC_SITE_URL` configuration.

---

## 1. Bottleneck analysis

### Initial page load
- **Issue:** `app/page.tsx` was entirely client-side with `dynamic(..., { ssr: false })`, delaying HTML content and hurting LCP/SEO.
- **Fix:** Server Component page; sections load as separate chunks with SSR enabled and skeleton fallbacks.

### JavaScript bundle size
| Library | ~Impact | Usage |
|---------|---------|--------|
| `ogl` + PlasmaGlobe | High | Hero only — lazy, no SSR |
| `gsap` + ScrollTrigger | High | `skill.tsx` only — below fold chunk |
| `swiper` | Medium | `design.tsx` only — below fold chunk |
| `framer-motion` | Medium | Hero — mitigated via `LazyMotion` + `optimizePackageImports` |
| Chat (`react-markdown`, lucide) | Medium | `/chat` route only — dynamic `ChatShell` |

### API calls
- Chat POST to `/api/chat` — no caching (correct for generative responses).
- Added prompt length limits and lazy SDK initialization.

### Rendering strategy
- Landing: **SSG** (`○` static) with client islands (Hero, Skill, etc.).
- Chat: static shell + hydrated chat UI.
- No middleware (none present).

### Images & media
- Hero: `priority` + `fetchPriority="high"` + `sizes="100vw"`.
- Below-fold: `loading="lazy"` + explicit `sizes`.
- Videos: load only after **IntersectionObserver** (Our Story).

### Fonts
- `Urbanist`: preload + `display: swap`.
- `Lobster Two`: display-only accent, `preload: false` to reduce blocking.

### Third-party scripts
- None embedded — good for INP and privacy scores.

### Database / middleware
- N/A — no DB; no middleware.

### Re-renders & hydration
- Removed duplicate animation libraries (`motion` package).
- WebGL no longer hydrates on server (`ssr: false`).
- `prefers-reduced-motion` skips WebGL entirely.

---

## 2. Implemented optimizations

### Server Components & code splitting
```tsx
// app/page.tsx — Server Component (no "use client")
const Skill = dynamic(() => import("@/components/skill"), {
  loading: () => <SectionFallback minHeight="80vh" />,
});
```

### LazyMotion (smaller framer-motion footprint)
```tsx
import { LazyMotion, domAnimation, m } from "framer-motion";
<LazyMotion features={domAnimation} strict>
  <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
</LazyMotion>
```

### WebGL deferred
```tsx
const PlasmaGlobe = dynamic(() => import("@/components/plasma-globe"), {
  ssr: false,
  loading: () => null,
});
```

### Caching (`next.config.ts`)
- Immutable 1-year cache for optimized images and static chunks.
- 7-day cache for video assets.

### SEO files
- `app/robots.ts`, `app/sitemap.ts`, enriched `metadata` in `app/layout.tsx`.
- Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in production.

---

## 3. Core Web Vitals playbook

### LCP (Largest Contentful Paint)
1. Hero image is LCP — keep file **&lt; 200KB** (WebP/AVIF in `/public/images`).
2. Avoid layout shift: fixed aspect container on hero (`aspect-square`, `h-[80svh]`).
3. Preconnect not needed (self-hosted fonts via `next/font`).

### INP / FID (interaction)
1. Defer GSAP ScrollTrigger until `Skill` chunk loads (below fold).
2. Pause WebGL when off-screen (PlasmaGlobe `IntersectionObserver`).
3. Avoid `locomotive-scroll` on main thread (removed from layout).

### CLS (Cumulative Layout Shift)
1. Always set `width`/`height` or `fill` + parent dimensions on `next/image`.
2. Use `SectionFallback` with `minHeight` for dynamic sections.
3. Reserve space for header (`fixed` + padding on first section).

---

## 4. Lighthouse checklist (95+)

### Performance
- [ ] Compress `hero-image.png` → WebP (&lt; 200KB)
- [ ] Run `next build` and test production (`next start`), not `next dev`
- [ ] Enable CDN (Vercel/Firebase Hosting) in front of static assets
- [ ] Consider single PlasmaGlobe on mobile

### SEO
- [x] Metadata, OG, Twitter, canonical
- [x] `robots.txt` + `sitemap.xml`
- [ ] Add `json-ld` Organization schema (optional)
- [ ] Verify all internal links resolve (`/beta-program` if live)

### Accessibility
- [ ] FAQ accordion: use `<button>` + `aria-expanded`
- [ ] Ensure color contrast on glass/overlay text
- [ ] Video: add `aria-label` on play control

### Best Practices
- [x] `poweredByHeader: false`
- [x] HTTPS in production
- [ ] CSP headers at hosting layer

---

## 5. Architectural recommendations

### Scalability
- Move Gemini calls to a **queue/worker** for high traffic; rate-limit per IP/session at edge.
- Split marketing site and chat app into separate deployments if chat traffic grows.

### Caching
| Resource | Strategy |
|----------|----------|
| Marketing pages | SSG + CDN |
| `/api/chat` | `no-store` (implemented) |
| User chat history | localStorage only — consider server persistence with encryption |

### Server rendering
- Keep marketing content as **Server Components** where no hooks are needed (`Services`, `Technology` could drop `"use client"` if any).
- Use **ISR** (`revalidate: 3600`) when CMS/content is added.

### Deployment
- Set `NEXT_PUBLIC_SITE_URL` for correct sitemap/canonical URLs.
- Use Firebase Hosting or Vercel with automatic image optimization.

### Database efficiency
- When adding persistence: connection pooling (PgBouncer), indexed queries, edge-compatible ORM (Drizzle).

---

## 6. Remaining manual tasks

1. **Dead code removed:** unused scroll helper, orphan chat widgets, and dev listing scripts.
2. **Run:** `npm install` after dependency cleanup.
3. **Convert static sections:** `Services.tsx` / `Technology.tsx` are already server-safe — ensure no accidental `"use client"`.
4. **Bundle analysis:** `npx @next/bundle-analyzer` (optional dev dependency).
5. **Measure:** Lighthouse CI on production URL; track LCP & INP in CrUX.

---

## 7. Measurable gains (estimates)

| Metric | Before (typical) | After (typical) |
|--------|------------------|-----------------|
| First-load JS (home) | ~400–600 KB | ~250–400 KB (chunks + LazyMotion) |
| TTI | Delayed by `ssr: false` blank sections | Faster paint with SSR HTML |
| SEO score | ~80–85 | **95+** with metadata + sitemap |
| LCP | WebGL + motion on critical path | Hero image paints first; WebGL deferred |

Run Lighthouse twice in incognito on production for stable scores.
