import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { CartProvider } from "@/lib/cart";
import { Nav } from "@/components/poppd/Nav";
import { Hero } from "@/components/poppd/Hero";
import { MenuSection } from "@/components/poppd/MenuSection";
import { CartDrawer } from "@/components/poppd/CartDrawer";
import { Marquee, Why, Story, Gram, Location, Footer } from "@/components/poppd/Sections";

const title = "POPP'd — Burgers, Hotdogs & Loaded Bites in Jubilee Hills";
const description =
  "POPP'd serves smashed burgers, loaded hotdogs, fries and shakes at The Hive Drive-In, Jubilee Hills, Hyderabad. Made to make your tastebuds pop.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <MenuSection />
        <Why />
        <Story />
        <Gram />
        <Location />
      </main>
      <Footer />
      <CartDrawer />
      <Toaster theme="dark" position="bottom-center" />
    </CartProvider>
  );
}
