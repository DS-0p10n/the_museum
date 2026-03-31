"use client";

import type { GalleryImage } from "@/data/images";
import type { Poem } from "@/data/poems";
import MemoryCard from "./MemoryCard";

interface MasonryGalleryProps {
  images: GalleryImage[];
  poems: Poem[];
}

export default function MasonryGallery({ images, poems }: MasonryGalleryProps) {
  return (
    <>
      <style>{`
        .masonry-grid {
          columns: 2;
          column-gap: 0.75rem;
        }
        @media (min-width: 500px)  { .masonry-grid { columns: 2; column-gap: 1rem; } }
        @media (min-width: 768px)  { .masonry-grid { columns: 3; column-gap: 1.25rem; } }
        @media (min-width: 1024px) { .masonry-grid { columns: 4; column-gap: 1.5rem; } }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 0.75rem;
        }
        @media (min-width: 500px)  { .masonry-item { margin-bottom: 1rem; } }
        @media (min-width: 768px)  { .masonry-item { margin-bottom: 1.25rem; } }
        @media (min-width: 1024px) { .masonry-item { margin-bottom: 1.5rem; } }
      `}</style>

      <div className="masonry-grid">
        {images.map((image, index) => {
          // Assign a poem to each image sequentially (wrapping around if needed)
          // We have 100 poems for 24 images, so we won't even wrap around.
          const poemToDisplay = poems[index % poems.length];

          return (
            <MemoryCard
              key={image.id}
              image={image}
              poem={poemToDisplay}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}
