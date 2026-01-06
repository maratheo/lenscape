"use client";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Image from "next/image";
import nextConfig from "../../next.config";

// Component to handle individual photo fade-in animations
const AnimatedPhoto = ({ photo, imageProps }: { photo: any; imageProps: any }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Image
      {...imageProps}
      ref={imgRef}
      src={`${imageProps.src}`}
      alt={imageProps.alt || ""}
      width={photo.width}
      height={photo.height}
      className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
    />
  );
};

let photos = [
  {
    src: `/img/gallery/img010.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 10",
  },
  {
    src: `/img/gallery/img045.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 45",
  },
  {
    src: `/img/gallery/white-roses.jpg`,
    width: 3120,
    height: 1760,
    alt: "White roses",
  },
  {
    src: `/img/gallery/img021.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 21",
  },
  {
    src: `/img/gallery/img033.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 33",
  },
  {
    src: `/img/gallery/img052.jpg`,
    width: 2786,
    height: 3849,
    alt: "Gallery image 52",
  },
  {
    src: `/img/gallery/img007.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 7",
  },
  {
    src: `/img/gallery/img016.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 16",
  },
  {
    src: `/img/gallery/img041.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 41",
  },
  {
    src: `/img/gallery/bubbles.jpg`,
    width: 1760,
    height: 3120,
    alt: "Bubbles",
  },
  {
    src: `/img/gallery/img014.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 14",
  },
  {
    src: `/img/gallery/img050.jpg`,
    width: 2820,
    height: 2769,
    alt: "Gallery image 50",
  },
  {
    src: `/img/gallery/img036.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 36",
  },
  {
    src: `/img/gallery/img003.jpg`,
    width: 1683,
    height: 2984,
    alt: "Gallery image 3",
  },
  {
    src: `/img/gallery/img025.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 25",
  },
  {
    src: `/img/gallery/img043.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 43",
  },
  {
    src: `/img/gallery/img018.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 18",
  },
  {
    src: `/img/gallery/img009.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 9",
  },
  {
    src: `/img/gallery/img031.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 31",
  },
  {
    src: `/img/gallery/river.jpg`,
    width: 3120,
    height: 1760,
    alt: "River",
  },
  {
    src: `/img/gallery/img047.jpg`,
    width: 2593,
    height: 1760,
    alt: "Gallery image 47",
  },
  {
    src: `/img/gallery/img012.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 12",
  },
  {
    src: `/img/gallery/img038.jpg`,
    width: 1760,
    height: 2824,
    alt: "Gallery image 38",
  },
  {
    src: `/img/gallery/img023.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 23",
  },
  {
    src: `/img/gallery/img005.jpg`,
    width: 2781,
    height: 3671,
    alt: "Gallery image 5",
  },
  {
    src: `/img/gallery/img028.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 28",
  },
  {
    src: `/img/gallery/img042.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 42",
  },
  {
    src: `/img/gallery/img029.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 29",
  },
  {
    src: `/img/gallery/img049.jpg`,
    width: 3081,
    height: 1738,
    alt: "Gallery image 49",
  },
  {
    src: `/img/gallery/birthday-cake.jpg`,
    width: 2455,
    height: 1760,
    alt: "Birthday cake",
  },
  {
    src: `/img/gallery/img015.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 15",
  },
  {
    src: `/img/gallery/img053.jpg`,
    width: 1509,
    height: 1862,
    alt: "Gallery image 53",
  },
  {
    src: `/img/gallery/img037.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 37",
  },
  {
    src: `/img/gallery/img027.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 27",
  },
  {
    src: `/img/gallery/img044.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 44",
  },
  {
    src: `/img/gallery/img002.jpg`,
    width: 3240,
    height: 2160,
    alt: "Gallery image 2",
  },
  {
    src: `/img/gallery/img020.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 20",
  },
  {
    src: `/img/gallery/img035.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 35",
  },
  {
    src: `/img/gallery/img051.jpg`,
    width: 2662,
    height: 2752,
    alt: "Gallery image 51",
  },
  {
    src: `/img/gallery/img011.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 11",
  },
  {
    src: `/img/gallery/img046.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 46",
  },
  {
    src: `/img/gallery/img024.jpg`,
    width: 3600,
    height: 2173,
    alt: "Gallery image 24",
  },
  {
    src: `/img/gallery/img040.jpg`,
    width: 1526,
    height: 2706,
    alt: "Gallery image 40",
  },
  {
    src: `/img/gallery/img032.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 32",
  },
  {
    src: `/img/gallery/img001.jpg`,
    width: 3048,
    height: 1719,
    alt: "Gallery image 1",
  },
  {
    src: `/img/gallery/vines.jpg`,
    width: 1760,
    height: 3120,
    alt: "Vines",
  },
  {
    src: `/img/gallery/img019.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 19",
  },
  {
    src: `/img/gallery/img006.jpg`,
    width: 4149,
    height: 2766,
    alt: "Gallery image 6",
  },
  {
    src: `/img/gallery/img039.jpg`,
    width: 1760,
    height: 2868,
    alt: "Gallery image 39",
  },
  {
    src: `/img/gallery/img026.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 26",
  },
  {
    src: `/img/gallery/img013.jpg`,
    width: 1596,
    height: 2829,
    alt: "Gallery image 13",
  },
  {
    src: `/img/gallery/img008.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 8",
  },
  {
    src: `/img/gallery/img022.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 22",
  },
  {
    src: `/img/gallery/img034.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 34",
  },
  {
    src: `/img/gallery/img048.jpg`,
    width: 3103,
    height: 1750,
    alt: "Gallery image 48",
  },
  {
    src: `/img/gallery/img004.jpg`,
    width: 1760,
    height: 3120,
    alt: "Gallery image 4",
  },
  {
    src: `/img/gallery/img017.jpg`,
    width: 3120,
    height: 1760,
    alt: "Gallery image 17",
  },
  {
    src: `/img/gallery/img030.jpg`,
    width: 3600,
    height: 2400,
    alt: "Gallery image 30",
  },
];

photos = photos.map((photo) => {
  return {
    ...photo,
    src: `${nextConfig.basePath}${photo.src}`,
  }
});

export default function HomepageGallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div
      className={`py-[15px]`}
    >
      <div className="container mx-auto" style={{ maxWidth: '1400px' }}>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          targetRowHeight={350}
          spacing={15}
          onClick={({ index }) => setIndex(index)}
          render={{
            image: (imageProps, { photo }) => (
              <AnimatedPhoto photo={photo} imageProps={imageProps} />
            ),
          }}
        />

        <Lightbox
          plugins={[Thumbnails]}
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={photos}
        />
      </div>
    </div>
  );
}
