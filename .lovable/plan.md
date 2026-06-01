## Goal

Fix the 404 you're seeing on Vercel by configuring the project to build a Vercel-compatible SSR output instead of being treated as a plain static site.

## Why you currently get 404

Vercel is auto-detecting the repo as a Vite static project, so it serves `dist/` and finds no `index.html` at the root. TanStack Start renders HTML per request via `src/server.ts`, so without a Vercel preset, no route resolves and every URL returns 404.

## Plan

1. **Switch the build target to Vercel**
   - Update `vite.config.ts` to pass `target: "vercel"` (or equivalent preset) to the TanStack Start / nitro config provided by `@lovable.dev/vite-tanstack-config`, so the build emits `.vercel/output/` (Vercel Build Output API v3).
   - Keep the existing `tanstackStart.server.entry: "server"` override so our `src/server.ts` SSR error wrapper stays active.

2. **Add a minimal `vercel.json`** (only if needed after step 1) to pin the framework as "vite" with the correct output directory, ensuring Vercel picks up `.vercel/output/` instead of `dist/`.

3. **Verify the build locally**
   - Run the production build and confirm `.vercel/output/` is produced with a `config.json` and a serverless/edge function for SSR.

4. **GitHub + Vercel wiring (instructions for you)**
   - Connect the repo to GitHub from the Lovable UI.
   - Import the GitHub repo in Vercel — with the preset in place, Vercel will auto-detect the Build Output and deploy SSR + static assets correctly.
   - Add your custom domain in Vercel → Project → Settings → Domains.

5. **Environment variables**
   - Re-add any `VITE_*` and server-only env vars (e.g. Supabase keys) in Vercel → Project → Settings → Environment Variables before the first deploy.

## Technical details

- Files changed: `vite.config.ts` (add Vercel target), possibly a new `vercel.json`.
- No changes to routes, components, or `src/server.ts` — the existing SSR wrapper continues to work; it just gets wrapped into a Vercel Function instead of a Cloudflare Worker.
- Lovable's own preview/publish (Cloudflare) keeps working in parallel — adding the Vercel target doesn't remove the Cloudflare build.

## Out of scope

- Converting to a static site (that was Option B).
- Setting up DNS for your domain registrar — only the Vercel side is covered here.
