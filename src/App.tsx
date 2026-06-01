import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { BranchLocator } from "@/components/site/BranchLocator";
import { Story } from "@/components/site/Story";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <Gallery />
        <Reviews />
        <BranchLocator />
        <Story />
      </main>
      <Footer />
    </div>
  );
}