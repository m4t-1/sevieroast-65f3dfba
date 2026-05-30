export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight text-foreground">
          Sevie<span className="text-accent">.</span>Roast
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#menu" className="transition-colors hover:text-foreground">Menu</a>
          <a href="#branches" className="transition-colors hover:text-foreground">Branches</a>
          <a href="#story" className="transition-colors hover:text-foreground">Our Story</a>
        </nav>
        <a
          href="#branches"
          className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Order
        </a>
      </div>
    </header>
  );
}