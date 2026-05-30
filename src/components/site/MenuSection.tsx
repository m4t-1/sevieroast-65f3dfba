import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menu } from "@/data/menu";

export function MenuSection() {
  return (
    <section id="menu" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">The Menu</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Brewed daily, made to linger.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A short, focused list — espresso classics, hand-brewed pours, and a few
            local twists.
          </p>
        </div>

        <Tabs defaultValue={menu[0].id} className="mt-12">
          <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap justify-center gap-1 rounded-full bg-background p-1">
            {menu.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {menu.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-10">
              <div className="grid gap-4 md:grid-cols-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-start justify-between gap-6 rounded-2xl border border-border/60 bg-background p-5 transition-colors hover:border-accent/40"
                  >
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="shrink-0 font-serif text-lg text-accent">₱{item.price}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}