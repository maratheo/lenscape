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
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight drop-shadow-lg font-[var(--font-playfair)]">
            Freelance photography service, providing portraits and event photography for individuals and groups within the local community
          </h1>
        </div>
      </section>
    </main>
  );
}
