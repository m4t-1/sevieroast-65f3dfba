import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Specialty Coffee · Est. Manila
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Slow-roasted coffee, brewed with care.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Small-batch beans, hand-pulled shots, and a quiet corner to settle in.
            Now serving Baesa, QC and Sampaloc, Manila.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore the menu
            </a>
            <a
              href="#branches"
              className="inline-flex h-11 items-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Find a branch
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
          <img
            src={heroImage}
            alt="Latte with delicate art beside scattered coffee beans"
            width={1600}
            height={1200}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-primary/10"
          />
        </div>
      </div>
    </section>
  );
}