# Project health restoration guide

## Root causes (your errors)

| Error | Cause |
|-------|--------|
| `Cannot read properties of null (reading 'matches')` | npm 11 + **leftover `node_modules/.pnpm`** from pnpm, or corrupted `node_modules` / lockfile |
| `npm audit fix --force` chaos | Forces incompatible `next@9` downgrades; never use on App Router projects |
| PostCSS moderate advisory | Nested `postcss` inside `next` was `<8.5.10`; fixed via root `postcss@^8.5.10` + `overrides` |
| `eslint-config-next` mismatch | Was `16.1.6` while `next` was `16.2.6` |

## Supported stack (this repo)

| Package | Version | Notes |
|---------|---------|--------|
| Node | **20.x or 22.x LTS** | You have v22 — OK. Avoid mixing Node 24 in one terminal and 22 in another. |
| `next` | **16.2.6** (pinned) | App Router, React 19 |
| `eslint-config-next` | **16.2.6** | Must match `next` minor |
| `react` / `react-dom` | **19.2.3** | Required by Next 16 |
| `tailwindcss` | **^4.1** | Via `@tailwindcss/postcss` in `postcss.config.mjs` |
| `postcss` | **^8.5.10** | Direct devDep + `overrides` for nested copies |

## 1. Clean environment (fix `null.matches`)

**Stop the dev server first** (Ctrl+C), then in PowerShell:

```powershell
cd D:\zentronix

# Remove install artifacts (including any pnpm layout)
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }

# Clear npm cache
npm cache clean --force
```

Verify Node/npm:

```powershell
node -v   # expect v20+ or v22+
npm -v    # 10.x or 11.x
```

If `node_modules\.pnpm` still exists after delete, close VS Code/Cursor and retry (file locks).

## 2. Fresh install (manual — not `audit fix --force`)

```powershell
npm install
```

PostCSS XSS fix is applied by:

```powershell
npm install -D postcss@^8.5.10
```

(already in `package.json` with `"overrides": { "postcss": "8.5.15" }` — use a literal version, not `"$postcss"`, or VS Code/Cursor npm task detection may fail to parse the file)

## 3. Validate

```powershell
npm run lint
npm run build
npm run dev
```

## 4. Security audits (safe)

```powershell
npm audit
```

To patch only PostCSS without touching Next:

```powershell
npm install -D postcss@8.5.10
npm install
```

Do **not** run `npm audit fix --force` on this project.

## 5. Common Next.js upgrade breakages

| Symptom | Fix |
|---------|-----|
| `eslint-config-next` peer warnings | Pin `eslint-config-next` to same version as `next` |
| `next/image` props errors | Ensure `width`/`height` or `fill` + parent `position: relative` |
| `use client` boundary errors | Interactive components need `"use client"` as **line 1** (no leading spaces) |
| Turbopack HMR glitches | Delete `.next`, restart; use `npm run dev:webpack` if needed |

## 6. Do not use

- `pnpm` (removed from this project — npm only)
- `npm audit fix --force`
- Caret drift on `next` during audits (`"next": "16.2.6"` pinned intentionally)
