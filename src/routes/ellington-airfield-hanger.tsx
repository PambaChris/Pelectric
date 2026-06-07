import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ellington-airfield-hanger")({
  component: EllingtonHangerPage,
});

const images = [
  "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic1.jpg",
  "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic2.jpg",
  "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic3.jpg",
  "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic4.jpg",
  "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic5.jpg",
  "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic6.jpg",
];

function EllingtonHangerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/hangars"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Hangars
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">Ellington Airfield Hanger</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Ellington Hanger ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
