import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/hotels-others")({
  component: HotelsOthersPage,
});

const images = [
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (1).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (1).png",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (10).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (10).png",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (11).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (12).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (13).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (14).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (15).jpg",
  "/Hotels and Inns/others/embassy-suite-234-rooms-woodlands-tx (16).jpg",
];

function HotelsOthersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/hotels-and-inns"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Hotels & Inns
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">Other Hotel Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Other hotel project ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
