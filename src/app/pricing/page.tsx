"use client";
import Image from "next/image";
import nextConfig from "../../../next.config";

export default function Pricing() {

  return (
    <div className="mb-16">
      <h1 className="text-center text-[1.5rem] mt-5 mb-5">Packages</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
        <div className="max-w-50 min-w-40 opacity-0 animate-[fadeIn_0.6s_ease-in_0.1s_forwards] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <Image src={`${nextConfig.basePath}/img/packages/individual.jpg`} alt="Individual Package" width={1000} height={1000} />
          <div className="p-3">
            <h2 className="text-2xl mt-4 text-center">INDIVIDUAL</h2>
            <p className="mt-2">This package includes a 1-hour photoshoot and 10 edited images.</p>
          </div>
        </div>
        <div className="max-w-50 min-w-40 opacity-0 animate-[fadeIn_0.6s_ease-in_0.1s_forwards] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <Image src={`${nextConfig.basePath}/img/packages/event.jpg`} alt="Event Package" width={1000} height={1000} />
          <div className="p-3">
            <h2 className="text-2xl mt-4 text-center">EVENT</h2>
            <p className="mt-2">This package includes a 3-hour photoshoot and 10 edited images.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
