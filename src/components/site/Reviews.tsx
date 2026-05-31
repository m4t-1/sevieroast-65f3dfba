import { Star } from "lucide-react";
import { reviews, aggregate } from "@/data/reviews";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(value) ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border/60 bg-secondary/40">
      <div className="py-20 md:py-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Loved by regulars</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            What folks are saying.
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-serif text-3xl text-foreground">{aggregate.rating.toFixed(1)}</span>
            <Stars value={aggregate.rating} />
            <span className="text-sm text-muted-foreground">
              · {aggregate.count} Google reviews
            </span>
          </div>
        </div>

        <div className="marquee-mask group relative mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max gap-5 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <figure
                key={`${r.name}-${i}`}
                className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-border/60 bg-background p-6 sm:w-[360px]"
              >
                <Stars value={r.rating} />
                <blockquote className="mt-4 grow text-sm leading-relaxed text-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4 text-sm">
                  <div className="font-medium text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.badge ? `${r.badge} · ` : ""}{r.date}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}