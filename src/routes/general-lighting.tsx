import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/general-lighting")({
  component: GeneralLightingPage,
});

const images = [
  "/General/General Lighting/Lighting_1.jpg",
  "/General/General Lighting/Lighting_10.jpg",
  "/General/General Lighting/Lighting_11.jpg",
  "/General/General Lighting/Lighting_12.jpg",
  "/General/General Lighting/Lighting_13.jpg",
];

function GeneralLightingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/lighting"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Lighting
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">General Lighting Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Lighting project ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
