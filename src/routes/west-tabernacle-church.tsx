import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/west-tabernacle-church")({
  component: WestTabernacleChurchPage,
});

const images = [
  "/Churches/West-Tabernacle Church/Picture.2_236.jpg",
  "/Churches/West-Tabernacle Church/West_Tebernacle_Church__Pic_1.jpg",
];

function WestTabernacleChurchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/churches"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Churches
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">West Tabernacle Church</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`West Tabernacle Church ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
