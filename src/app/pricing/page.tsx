"use client";

export default function Pricing() {

  return (
    <div className="mb-16">
      <h1 className="text-center text-[1.5rem] mt-5 mb-5">Packages</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 px-6">
        <div className="flex-1 min-w-52 max-w-72 rounded-2xl overflow-hidden bg-stone-50 shadow-md opacity-0 animate-[fadeIn_0.6s_ease-in_0.1s_forwards] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <div className="bg-stone-500 px-8 py-6">
            <h2 className="text-2xl text-center tracking-wide text-white">Starter</h2>
          </div>
          <div className="p-2">
            <p className="text-3xl text-center font-light">$150</p>
            <hr className="my-5 border-stone-300" />
            <ul className="space-y-2 pt-1 p-5 text-sm text-stone-600">
              <li>45 minutes</li>
              <li>2 locations</li>
              <li>1 outfit</li>
              <li>15+ photos</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 min-w-52 max-w-72 rounded-2xl overflow-hidden bg-stone-50 shadow-md opacity-0 animate-[fadeIn_0.6s_ease-in_0.3s_forwards] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <div className="bg-stone-600 px-8 py-6">
            <h2 className="text-2xl text-center tracking-wide text-white">Regular</h2>
          </div>
          <div className="p-2">
            <p className="text-3xl text-center font-light">$250</p>
            <hr className="my-5 border-stone-300" />
            <ul className="space-y-2 pt-1 p-5 text-sm text-stone-600">
              <li>1.5 hours</li>
              <li>3 locations</li>
              <li>3 outfits</li>
              <li>30+ photos</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 min-w-52 max-w-72 rounded-2xl overflow-hidden bg-stone-50 shadow-md opacity-0 animate-[fadeIn_0.6s_ease-in_0.5s_forwards] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <div className="bg-stone-800 px-8 py-6">
            <h2 className="text-2xl text-center tracking-wide text-white">Full</h2>
          </div>
          <div className="p-2">
            <p className="text-3xl text-center font-light">$425</p>
            <hr className="my-5 border-stone-300" />
            <ul className="space-y-2 pt-1 p-5 text-sm text-stone-600">
              <li>2-2.5 hours</li>
              <li>5 locations</li>
              <li>Unlimited outfits</li>
              <li>50+ photos</li>
              <li>🍾 Champagne included 🍾</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
