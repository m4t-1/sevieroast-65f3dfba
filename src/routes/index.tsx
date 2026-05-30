import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
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
          "Small-batch specialty coffee in Baesa, QC and Lacson UST, Sampaloc. Cozy wood-lined cafés, fresh pastries, and GrabFood delivery.",
      },
      { property: "og:title", content: "Sevie Roast — Specialty Coffee" },
      {
        property: "og:description",
        content:
          "Two cozy cafés in Quezon City and Sampaloc, Manila. Hand-pulled shots, fresh pastries, and GrabFood delivery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Sevie Roast — Lacson UST",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Piy Margal St, cor. Dos Castillas St",
            addressLocality: "Sampaloc, Manila",
            postalCode: "1008",
            addressCountry: "PH",
          },
          servesCuisine: "Coffee",
          priceRange: "₱",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.1",
            reviewCount: "12",
          },
        }),
      },
    ],
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
        <Gallery />
        <Reviews />
        <BranchLocator />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
