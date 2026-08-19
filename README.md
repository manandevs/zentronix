# Zentronix

Zentronix is a Next.js application with Prismic content management and Slice
Machine support.

## Setup

Install dependencies with one package manager. Bun is supported for local
development; npm is also supported.

```powershell
bun i
# or
npm i
```

Create `.env.local` in the project root:

```env
GEMINI_API_KEY=
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=zentronix
```

Keep `.env.local` private. Add the Gemini API key only on your local machine or
in the deployment provider's environment settings.

## Prismic Setup

The Prismic repository is `zentronix`. Initialize or refresh the local
configuration with:

```powershell
npx prismic init
```

To pull content models from Prismic later, run:

```powershell
npx prismic pull
```

Initialize Slice Machine with:

```powershell
npx @slicemachine/init@latest
```

If initialization reports `Invalid context provided` while pulling existing
types, confirm that you are logged in to the correct Prismic account and
repository, then run `npx prismic pull` or start Slice Machine manually:

```powershell
npx start-slicemachine --open
```

Slice Machine opens at [http://localhost:9999](http://localhost:9999).

## Run The App

Start the Next.js development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Useful checks:

```powershell
npm run lint
npm run build
```

## Dependency Security

Review dependency vulnerabilities with:

```powershell
npm audit
```

Apply non-breaking fixes with:

```powershell
npm audit fix
```

Use `npm audit fix --force` only after reviewing the dependency upgrades. It
may upgrade Next.js beyond the version declared in `package.json`.
