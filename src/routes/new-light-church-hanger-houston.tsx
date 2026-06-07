import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/new-light-church-hanger-houston")({
  component: NewLightChurchHangerPage,
});

const images = [
  "/Hangers/New Light Church Hanger Houston/New_Light_Church_Hanger_Houston_TX_Pic1.jpg",
  "/Hangers/New Light Church Hanger Houston/New_Light_Church_Hanger_Houston_TX_Pic2.jpg",
];

function NewLightChurchHangerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/hangars"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Hangars
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">New Light Church Hanger Houston</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`New Light Church Hanger Houston ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
