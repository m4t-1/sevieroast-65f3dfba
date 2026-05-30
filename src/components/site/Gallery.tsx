import storefront from "@/assets/sevie/storefront.jpg";
import entrance from "@/assets/sevie/entrance.jpg";
import seatingOrange from "@/assets/sevie/seating-orange.jpg";
import lounge from "@/assets/sevie/lounge.jpg";
import pastries from "@/assets/sevie/pastries.jpg";

const shots = [
  { src: storefront, alt: "Sevie Roast storefront at Lacson UST", className: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: seatingOrange, alt: "Warm wood-paneled banquette seating", className: "aspect-[4/5]" },
  { src: pastries, alt: "Fresh pastry case", className: "aspect-[4/5]" },
  { src: entrance, alt: "Glass entrance with the Sevie Roast crest", className: "aspect-[4/5]" },
  { src: lounge, alt: "Mezzanine lounge with leather chairs", className: "aspect-[4/5]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">The Space</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
              Warm wood, soft light, room to stay.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Two floors of seating, working outlets, and a fresh pastry case
            stocked every morning.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {shots.map((shot) => (
            <div
              key={shot.alt}
              className={`overflow-hidden rounded-2xl bg-muted ${shot.className}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}