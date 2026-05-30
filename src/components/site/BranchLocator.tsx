import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { branches, type Branch } from "@/data/branches";

function MapMock({ branch }: { branch: Branch }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-[oklch(0.93_0.02_85)]"
      aria-hidden
    >
      {/* grid streets */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.86 0.025 75) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.86 0.025 75) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* diagonal main road */}
      <div className="absolute inset-x-[-10%] top-1/2 h-3 -translate-y-1/2 rotate-[-12deg] bg-[oklch(0.82_0.03_75)]" />
      <div className="absolute inset-y-[-10%] left-1/2 w-3 -translate-x-1/2 rotate-[8deg] bg-[oklch(0.82_0.03_75)]" />
      {/* park blob */}
      <div className="absolute right-6 top-6 h-20 w-24 rounded-[40%] bg-[oklch(0.82_0.06_135)]/60" />
      {/* pin */}
      <div
        className="absolute"
        style={{ left: `${branch.pin.x}%`, top: `${branch.pin.y}%`, transform: "translate(-50%, -100%)" }}
      >
        <div className="flex flex-col items-center">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 ring-4 ring-background">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="-mt-1 h-3 w-3 rotate-45 bg-accent" />
        </div>
      </div>
      {/* labels */}
      <div className="absolute bottom-3 left-3 rounded-md bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {branch.area}
      </div>
      <div className="absolute right-3 top-3 rounded-md bg-background/90 px-2 py-1 text-[10px] text-muted-foreground">
        Simulated map
      </div>
    </div>
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
          <MapMock branch={active} />
          <div className="flex flex-col">
            <h3 className="font-serif text-2xl text-foreground">{active.name}</h3>
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