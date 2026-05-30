export function Story() {
  return (
    <section id="story" className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Our Story</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            A neighborhood roast, from bean to cup.
          </h2>
        </div>
        <div className="space-y-5 text-primary-foreground/80">
          <p>
            Sevie Roast started as a tiny corner counter in Baesa, sourcing green
            beans from Sagada, Benguet, and Mt. Apo. We roast in small batches,
            twice a week, so what's in your cup is never more than a few days old.
          </p>
          <p>
            In Sampaloc we built a quieter space for students and slow mornings —
            same beans, same hands, same care.
          </p>
        </div>
      </div>
    </section>
  );
}