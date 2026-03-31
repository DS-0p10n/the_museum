// data/images.ts
// The images are now coming from the local public/images folder.

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  /** width / height — drives the rendered aspect ratio */
  aspect: number;
}

// Varied aspect ratios: portrait, landscape, square — keeps masonry interesting
const makeImage = (
  id: number,
  w: number,
  h: number,
  caption?: string,
  date?: string
): GalleryImage => ({
  id: `img-${id}`,
  src: `/images/image-${id}.jpeg`,
  alt: caption ?? `Memory ${id}`,
  caption,
  date,
  aspect: w / h,
});

export const galleryImages: GalleryImage[] = [
  makeImage(1,  400, 560, "The beginning",          "Jan 2022"),
  makeImage(2,  400, 300, "Golden hour",             "Feb 2022"),
  makeImage(3,  400, 500, "Quiet Sunday",            "Mar 2022"),
  makeImage(4,  400, 400, "Coffee for two",          "Apr 2022"),
  makeImage(5,  400, 620, "First trip together",     "May 2022"),
  makeImage(6,  400, 300, "Rooftop night",           "Jun 2022"),
  makeImage(7,  400, 450, "Laughter",                "Jul 2022"),
  makeImage(8,  400, 580, "Rain & us",               "Aug 2022"),
  makeImage(9,  400, 300, "Summer afternoon",        "Sep 2022"),
  makeImage(10, 400, 520, "You, always you",         "Oct 2022"),
  makeImage(11, 400, 400, "Bookshop afternoon",      "Nov 2022"),
  makeImage(12, 400, 600, "Winter walk",             "Dec 2022"),
  makeImage(13, 400, 300, "New year, new us",        "Jan 2023"),
  makeImage(14, 400, 480, "Valentine's breakfast",   "Feb 2023"),
  makeImage(15, 400, 560, "Pressed flowers",         "Mar 2023"),
  makeImage(16, 400, 300, "Sunset drive",            "Apr 2023"),
  makeImage(17, 400, 440, "The beach day",           "May 2023"),
  makeImage(18, 400, 600, "Museum visit",            "Jun 2023"),
  makeImage(19, 400, 300, "Park picnic",             "Jul 2023"),
  makeImage(20, 400, 520, "Late night talks",        "Aug 2023"),
  makeImage(21, 400, 400, "Morning light",           "Sep 2023"),
  makeImage(22, 400, 580, "Autumn leaves",           "Oct 2023"),
  makeImage(23, 400, 300, "Your smile",              "Nov 2023"),
  makeImage(24, 400, 640, "Anniversary dinner",      "Dec 2023"),
];
