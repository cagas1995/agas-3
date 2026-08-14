import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/mdc/Nav";
import { Hero } from "@/components/mdc/Hero";
import { Services } from "@/components/mdc/Services";
import { Showcase } from "@/components/mdc/Showcase";
import { SystemJourney } from "@/components/mdc/SystemJourney";
import { Industries } from "@/components/mdc/Industries";
import { Contact } from "@/components/mdc/Contact";
import { Footer } from "@/components/mdc/Footer";

const title = "Marcelo Danzel Cagas | GoHighLevel Specialist — Mastery Canvas Digital";
const description =
  "GoHighLevel All-Rounder: agency setup, CRM automation, AI receptionists, funnels and websites built end to end. Automate. Dominate. Elevate.";

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
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Services />
      <Showcase />
      <SystemJourney />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
}
