import { useState } from "react";
import { MapPin, Clock, Phone, Star } from "lucide-react";
import { branches, type Branch } from "@/data/branches";

function BranchMap({ branch }: { branch: Branch }) {
  return (
    <a
      href={branch.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${branch.name} in Google Maps`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-secondary transition-shadow hover:shadow-lg hover:shadow-primary/10"
    >
      <img
        src={branch.mapImage}
        alt={`Map showing ${branch.name}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {branch.area}
      </div>
      <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-background/95 px-2.5 py-1 text-[10px] font-medium text-foreground shadow-sm">
        <MapPin className="h-3 w-3 text-accent" />
        Open in Google Maps ↗
      </div>
    </a>
  );
}

export function BranchLocator() {
  const [activeId, setActiveId] = useState<Branch["id"]>(branches[0].id);
  const active = branches.find((b) => b.id === activeId)!;

  return (
    <section id="branches" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Visit Us</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Two cafés. One roast.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drop in, or have it delivered — pick a branch to see hours and order.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-secondary p-1">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveId(b.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeId === b.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {b.id === "baesa" ? "Baesa, QC" : "Sampaloc, Manila"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <BranchMap branch={active} />
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h3 className="font-serif text-2xl text-foreground">{active.name}</h3>
              {active.rating ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs text-foreground">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  {active.rating.toFixed(1)}
                  <span className="text-muted-foreground">
                    · {active.reviewCount} reviews
                  </span>
                </span>
              ) : null}
            </div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-foreground">{active.address}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-foreground">{active.hours}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <span className="text-foreground">{active.phone}</span>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Delivery
              </p>
              <p className="mt-2 font-serif text-lg text-foreground">
                Order from {active.area}
              </p>
              <a
                href={active.grabFoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-[#00B14F] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#00913f]"
              >
                Order on GrabFood — {active.id === "baesa" ? "Baesa" : "Sampaloc"}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}