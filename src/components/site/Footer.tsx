import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socials = [
  {
    label: "Instagram @seviroastcoffee",
    href: "https://instagram.com/seviroastcoffee",
    Icon: Instagram,
  },
  {
    label: "Facebook @sevieroastcoffeeph",
    href: "https://facebook.com/sevieroastcoffeeph",
    Icon: Facebook,
  },
  {
    label: "Messenger — Sevie Roast Coffee",
    href: "https://m.me/sevieroastcoffeeph",
    Icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-lg text-foreground">
              Sevie<span className="text-accent">.</span>Roast
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Specialty coffee · Baesa, QC · Lacson UST, Sampaloc
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-foreground">
              <a href="#menu" className="hover:text-accent">Menu</a>
              <a href="#branches" className="hover:text-accent">Branches</a>
              <a href="#story" className="hover:text-accent">Story</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Follow
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {socials.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sevie Roast. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}