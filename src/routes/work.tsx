import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/mdc/Nav";
import { Showcase } from "@/components/mdc/Showcase";
import { Footer } from "@/components/mdc/Footer";

const title = "Work & Loom Walkthroughs | Marcelo Danzel Cagas — GoHighLevel";
const description =
  "Loom recordings, screenshots and build walkthroughs of GoHighLevel agency setups, automations, AI receptionists, funnels and websites.";

export const Route = createFileRoute("/work")({
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
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-16">
      <Nav />
      <Showcase full />
      <Footer />
    </main>
  );
}
