import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/MenuSection";
import { BranchLocator } from "@/components/site/BranchLocator";
import { Story } from "@/components/site/Story";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sevie Roast — Specialty Coffee in Baesa & Sampaloc" },
      {
        name: "description",
        content:
          "Small-batch specialty coffee roasted in Manila. Visit Sevie Roast in Baesa, QC or Sampaloc, or order on GrabFood.",
      },
      { property: "og:title", content: "Sevie Roast — Specialty Coffee" },
      {
        property: "og:description",
        content:
          "Small-batch specialty coffee, hand-pulled shots, and two cozy cafés in Quezon City and Manila.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <BranchLocator />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
