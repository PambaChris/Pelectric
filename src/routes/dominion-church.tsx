import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dominion-church")({
  component: DominionChurchPage,
});

const images = [
  "/Churches/Dominion Church/Dominion_Church_Houston_TX_Pic1.jpg",
  "/Churches/Dominion Church/Dominion_Church_Houston_TX_Pic2.jpg",
  "/Churches/Dominion Church/Dominion_Church_Houston_TX_Pic3.jpg",
];

function DominionChurchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/churches"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Churches
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">Dominion Church</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Dominion Church ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
