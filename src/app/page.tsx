export default function Home() {

  return (
    <main>
      <section
        aria-label="Hero"
        className="relative w-full min-h-[70vh] flex items-center bg-center bg-cover"
        style={{ backgroundImage: `url('/img/birthday-cake.jpg')` }}
      >
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight drop-shadow-lg font-(family-name:--font-cormorant-garamond) font-semibold text-center">
            Freelance photography service, providing portraits and event photography for individuals and groups within the local community
          </h1>
        </div>

      </section>

      <div className="flex flex-1 justify-center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9BB6GobF0SZtveCfMxI4sGimjrXnBAqqGMti1itTiDctyKw/viewform"
        target="_blank">
          <button className="px-8 py-4 mt-8 mb-12 bg-[rgb(255,251,244)] border-2 border-stone-800 text-stone-800 font-(family-name:--font-cormorant-garamond) font-semibold text-xl tracking-wide hover:bg-stone-800 hover:text-[rgb(255,251,244)] transition-all duration-300 shadow-md hover:shadow-xl">
            Book a Session
          </button>
        </a>
      </div>

    </main>
  );
}
