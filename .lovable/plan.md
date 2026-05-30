## Sevie Roast — Modern Minimalist Coffee Shop Site

A single responsive homepage for Sevie Roast with warm cafe palette (cream, deep coffee brown, soft charcoal), built on the existing TanStack Start + Tailwind stack.

### Design system (src/styles.css)
- Replace default tokens with warm palette in oklch:
  - `--background`: cream (~oklch(0.97 0.02 80))
  - `--foreground`: deep coffee brown (~oklch(0.25 0.04 50))
  - `--primary`: deep coffee brown; `--primary-foreground`: cream
  - `--secondary` / `--muted`: soft charcoal-tinted beige
  - `--accent`: warm caramel
  - `--border`: subtle warm tan
- Typography: serif display (Playfair Display) for headings + Inter for body, loaded via Google Fonts in `__root.tsx` head links.

### Page sections (src/routes/index.tsx + components)
1. **Nav** — wordmark "Sevie Roast" left; anchor links Menu / Branches / Order; minimal, sticky.
2. **Hero** — large serif headline, short tagline ("Small-batch specialty coffee, brewed in Quezon City & Manila"), two CTAs (View Menu, Find a Branch). Subtle warm gradient/texture background; AI-generated hero image of latte/beans.
3. **Tabbed Menu** — shadcn `Tabs` with categories: Espresso, Brewed Coffee, Specialty, Non-Coffee, Pastries. Each tab shows a grid of items (name, short description, price in ₱). Static curated data in `src/data/menu.ts`.
4. **Branch Locator** — toggle (Tabs or segmented buttons) between **Baesa, QC** and **Sampaloc, Manila**. Each panel shows:
   - Address, hours, phone (placeholder)
   - Simulated Google Maps preview: a styled card with a stylized map illustration (CSS grid lines + pin marker) — clearly a mock, no external API
   - A prominent **"Order on GrabFood"** button (distinct per branch; opens GrabFood search URL for that branch in new tab as placeholder)
5. **Footer** — brand line, socials placeholders, copyright.

### Components to add
- `src/components/site/Nav.tsx`
- `src/components/site/Hero.tsx`
- `src/components/site/MenuSection.tsx`
- `src/components/site/BranchLocator.tsx` (includes `MapMock` subcomponent)
- `src/components/site/Footer.tsx`
- `src/data/menu.ts`, `src/data/branches.ts`

### Assets
- Generate 1 hero image (warm, moody pour-over / latte art) into `src/assets/hero.jpg`.

### SEO
- Update `index.tsx` route `head()` with Sevie Roast title (<60 chars), meta description (<160 chars), og tags. Single H1 in hero.

### Out of scope
- Real Google Maps integration (simulated only, as requested)
- Online ordering backend (GrabFood buttons are external links)
- Multi-page routing — single homepage with in-page anchors
