import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/embassy-college-station")({
  component: EmbassyCollegeStationPage,
});

const images = [
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx (1).jpg",
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx (2).jpg",
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx (3).jpg",
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx (4).jpg",
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx (5).jpg",
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx.jpg",
  "/Hotels and Inns/Embassy-College-Station-TX-168-Rooms/embassy-suite-234-rooms-woodlands-tx.png",
];

function EmbassyCollegeStationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/hotels-and-inns"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Hotels & Inns
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">Embassy College Station (168 Rooms)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Embassy College Station ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
