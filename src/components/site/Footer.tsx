export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="font-serif text-lg text-foreground">
            Sevie<span className="text-accent">.</span>Roast
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Specialty coffee · Baesa, QC · Sampaloc, Manila
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-foreground">Menu</a>
          <a href="#branches" className="hover:text-foreground">Branches</a>
          <a href="#story" className="hover:text-foreground">Story</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sevie Roast. All rights reserved.
        </p>
      </div>
    </footer>
  );
}