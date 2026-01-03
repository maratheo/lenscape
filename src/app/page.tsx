"use client";

import nextConfig from "../../next.config";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

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
    <img
      {...imageProps}
      ref={imgRef}
      className={`transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
};

const photos = [
  {
    src: `${nextConfig.basePath}/img/birthday-cake.jpg`,
    width: 2455,
    height: 1760,
    alt: "birthday cake",
  },
  {
    src: `${nextConfig.basePath}/img/bubbles.jpg`,
    width: 1760,
    height: 3120,
    alt: "bubbles",
  },
  {
    src: `${nextConfig.basePath}/img/river.jpg`,
    width: 3120,
    height: 1760,
    alt: "river",
  },
  {
    src: `${nextConfig.basePath}/img/white-roses.jpg`,
    width: 3120,
    height: 1760,
    alt: "white roses",
  },
  {
    src: `${nextConfig.basePath}/img/sun-spot.jpg`,
    width: 1760,
    height: 3120,
    alt: "sun spot",
  },
  {
    src: `${nextConfig.basePath}/img/vines.jpg`,
    width: 1760,
    height: 3120,
    alt: "vines",
  },
];

export default function Home() {
  const [index, setIndex] = React.useState(-1);
  const [isGalleryVisible, setIsGalleryVisible] = React.useState(false);
  const galleryRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsGalleryVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <main>
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative z-10">
            <div className="bg-[rgba(118,83,66,0.71)] m-auto md:-mr-8 p-4 mb-10 shadow-[0_6px_10px_-1px_rgba(0,0,0,0.3),0_4px_6px_-2px_rgba(0,0,0,0.3)] animate-[slideInLeft_0.8s_ease-out]">
              <h1 className="text-2xl lg:text-4xl px-2 leading-tight font-(family-name:--font-im-fell-double-pica) italic font-stretch-extra-condensed text-white">
                Freelance photography service, providing portraits and event photography for individuals and groups.
              </h1>
            </div>
            <div className="px-6 pr-10 animate-[fadeIn_1s_ease-in_0.4s_both]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada lectus vitae gravida lobortis. Pellentesque luctus, leo vel dapibus facilisis, lacus ipsum mattis augue, quis dignissim quam urna sit amet libero. Suspendisse magna est, dapibus ac massa ac, sollicitudin porttitor turpis.
              </p>
              <p>
                Maecenas vitae luctus elit. Donec metus elit, rutrum vitae scelerisque in, commodo at dui. Quisque ac pellentesque erat. Nulla non dictum nisl. Integer metus justo, pulvinar ac ipsum a, scelerisque consequat augue.
              </p>
            </div>
          </div>
          <img className="hidden md:inline w-[40%] h-auto object-cover relative z-0 animate-[slideInRight_0.8s_ease-out]" src={`${nextConfig.basePath}/img/sophie.jpg`} alt="" />
        </div>
      </section>
      <div 
        ref={galleryRef}
        className={`min-h-[70vh] bg-[rgb(255, 251, 244)] py-[15px] transition-opacity duration-1000 ${
          isGalleryVisible ? 'opacity-100' : 'opacity-0'
        }`}
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
    </main>
  );
}
