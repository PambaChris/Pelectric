// src/lib/project-image-data.ts

export interface ProjectCategory {
  title: string;
  sub: string;
  slug: string;
  img?: string;
}

// Function to convert title to slug
export const toSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/ & /g, "-and-") // handle " & "
    .replace(/[^\w\s-]/g, "") // remove all non-word chars
    .replace(/[\s_-]+/g, "-") // replace spaces and underscores with a single dash
    .replace(/^-+|-+$/g, ""); // trim dashes from start and end
};

export const projectCategories: ProjectCategory[] = [
  {
    img: "/Hotels and Inns/img-002.png",
    title: "Hotels & Inns",
    sub: "Full hospitality electrical scope",
    slug: toSlug("Hotels & Inns"),
  },
  {
    img: "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic1.jpg",
    title: "Hangars",
    sub: "High-bay industrial systems",
    slug: toSlug("Hangars"),
  },
  {
    img: "/Construction/img-006.png",
    title: "Construction",
    sub: "Diverse commercial projects",
    slug: toSlug("Construction"),
  },
  {
    img: "/Lighting/General Lighting/Lighting_13.jpg",
    title: "Lighting",
    sub: "Architectural & exterior design",
    slug: toSlug("Lighting"),
  },
  {
    img: "/Construction/General Construction/Abvi_Lake_Charles_1.jpg",
    title: "General",
    sub: "Ground-up commercial",
    slug: toSlug("General"),
  },
  {
    img: "/Churches/Dominion Church/Dominion_Church_Houston_TX_Pic1.jpg",
    title: "Churches",
    sub: "Sanctuary lighting & AV power",
    slug: toSlug("Churches"),
  },
];
