"use client";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";


const photos = [
  {
    src: "/img/birthday-cake.jpg",
    width: 2455,
    height: 1760,
    alt: "birthday cake",
  },
  {
    src: "/img/bubbles.jpg",
    width: 1760,
    height: 3120,
    alt: "bubbles",
  },
  {
    src: "/img/river.jpg",
    width: 3120,
    height: 1760,
    alt: "river",
  },
  {
    src: "/img/white-roses.jpg",
    width: 3120,
    height: 1760,
    alt: "white roses",
  },
  {
    src: "/img/sun-spot.jpg",
    width: 1760,
    height: 3120,
    alt: "sun spot",
  },
  {
    src: "/img/vines.jpg",
    width: 1760,
    height: 3120,
    alt: "vines",
  },
];

export default function Portfolio() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="min-h-[70vh] bg-[rgb(255, 251, 244)] py-8">
      <div className="container mx-auto px-6" style={{ maxWidth: '1400px' }}>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          targetRowHeight={350}
          spacing={15}
          onClick={({ index }) => setIndex(index)}
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
