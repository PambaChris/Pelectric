import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/general-construction")({
  component: GeneralConstructionPage,
});

const images = [
  "/Construction/General Construction/Abvi_Lake_Charles_1.jpg",
  "/Construction/General Construction/Abvi_Lake_Charles_2.jpg",
  "/Construction/General Construction/Anointed_Church_Beaumont_1.jpg",
  "/Construction/General Construction/Anointed_Church_Beaumont_2.jpg",
  "/Construction/General Construction/Ark_Fellowship_1.jpg",
  "/Construction/General Construction/Ark_Fellowship_2.jpg",
  "/Construction/General Construction/Bear_Hunter_Plaza_1.jpg",
  "/Construction/General Construction/Bear_Hunter_Plaza_2.jpg",
  "/Construction/General Construction/Candlewood_Maxie_Road.jpg",
  "/Construction/General Construction/Hampton_Inn_Winnie_1.jpg",
  "/Construction/General Construction/Hampton_Inn_Winnie_2.jpg",
  "/Construction/General Construction/Hilton_Garden_Inn.jpg",
  "/Construction/General Construction/Holiday_Inn_Beaumont_1.jpg",
  "/Construction/General Construction/Holiday_Inn_Beaumont_2.jpg",
  "/Construction/General Construction/La_Quinta_Boutte_1.jpg",
  "/Construction/General Construction/La_Quinta_Boutte_2.jpg",
  "/Construction/General Construction/Mandir_Temple_1.jpg",
  "/Construction/General Construction/Mandir_Temple_2.jpg",
  "/Construction/General Construction/Residential_1.jpg",
  "/Construction/General Construction/Residential_2.jpg",
];

function GeneralConstructionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Link
        to="/construction"
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        &larr; Back to Construction
      </Link>
      <h1 className="text-4xl font-display font-bold mb-8">General Construction Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Construction project ${i + 1}`}
            style={{ borderRadius: "121px", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}
