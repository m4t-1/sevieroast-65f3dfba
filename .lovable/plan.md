Incorporate real Sevie Roast info (from the Google listing + uploaded interior/pastry photos) into the site.

### Data updates
- `src/data/branches.ts` — Sampaloc branch:
  - name: "Sevie Roast — Lacson UST"
  - address: "Piy Margal St, cor. Dos Castillas St, Sampaloc, Manila, 1008 Metro Manila"
  - hours: "Daily · 10:00 AM – late" (listing says "Opens 10 AM")
  - rating: 4.1 (12 reviews)
- Keep Baesa branch as-is (no real data was provided for it).
- Add optional `rating` / `reviewCount` fields to the Branch type.

### Photos (use uploaded images)
- Copy the 4 interior shots + 1 pastry case shot into `src/assets/sevie/`:
  - `storefront.jpg`, `seating-orange.jpg`, `lounge.jpg`, `entrance.jpg`, `pastries.jpg`
- New **Gallery section** between Menu and Branches: responsive masonry-ish grid of the 5 real photos with subtle captions.
- Swap the AI hero image for the warmest storefront/lounge shot (likely `lounge.jpg`) to give the page real identity. Keep the latte image as a secondary accent or drop it.

### Reviews section (new)
- New `Reviews` component between Gallery and Branches showing 3 curated real reviews (Elvira Reyes, Stella Jones, Jul Martin Cruz) as cards with name, date, snippet, and a small star row.
- Header shows aggregate "4.1 ★ · 12 Google reviews".
- Data lives in `src/data/reviews.ts`.

### Branch card polish
- Show rating + review count on the Sampaloc branch card.
- Update hours display.
- Keep simulated map + GrabFood CTA as-is.

### SEO
- Update meta description to mention Lacson UST / España area for the Sampaloc branch.
- Add JSON-LD `CafeOrCoffeeShop` for the Sampaloc location with address, geo placeholder omitted, aggregateRating 4.1/12.

### Out of scope
- No real Google Maps embed (still simulated, per original brief).
- No live reviews fetch — curated static set from the provided text.
- No Baesa photos/reviews (none provided); leave Baesa with the generic copy.
