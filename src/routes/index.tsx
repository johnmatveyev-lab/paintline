import { createFileRoute } from "@tanstack/react-router";
import { PaintLineHome } from "@/components/paintline-home";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return <PaintLineHome />;
}
