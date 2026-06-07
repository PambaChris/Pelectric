import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/embassy-woodlands")({
  component: EmbassyWoodlandsPage,
});

const images = [
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (10).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (11).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (12).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (1).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (2).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (3).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (4).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (5).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (6).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (7).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (8).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx (9).jpg",
  "/Hotels and Inns/Embassy Suite 234 rooms Woodlands/embassy-suite-234-rooms-woodlands-tx.jpg",
];

function EmbassyWoodlandsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/hotels-and-inns"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Hotels & Inns
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">Embassy Suite Woodlands (234 Rooms)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Embassy Suite Woodlands ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
