"use client";


export default function Pricing() {

  return (
    <>
      <h1 className="text-center text-[1.5rem] mt-5 mb-5">Packages</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 px-50">
        <div className="max-w-50 min-w-40">
          <img src="/img/packages/individual.jpg" alt="Individual Package" />
          <h2 className="text-2xl mt-4 text-center">INDIVIDUAL</h2>
          <p className="mt-2">This package includes a 1-hour photoshoot and 10 edited images.</p>
        </div>
        <div className="max-w-50 min-w-40">
          <img src="/img/packages/event.jpg" alt="Event Package" />
          <h2 className="text-2xl mt-4 text-center">EVENT</h2>
          <p className="mt-2">This package includes a 3-hour photoshoot and 10 edited images.</p>
        </div>
      </div>
    </>
  );
}
