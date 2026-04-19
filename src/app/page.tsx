import HomepageGallery from "@/components/HomepageGallery";

export default function Home() {

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
                Josh is a student at the University of Illinois Urbana-Champaign, where he is double majoring in Marketing and Information Systems with a minor in International Business. He has been operating his own photography business since his sophomore year of high school, giving him over half a decade of hands-on experience in the industry. This academic background in business and systems allows him to manage the technical and logistical side of his shoots with the same precision he applies to his creative work.
              </p>
              <p>
                His portfolio is diverse, spanning senior portraits, graduation ceremonies, anniversaries, live concerts, and high-action sports. Regardless of the setting, Josh's primary goal is to make his clients feel comfortable and empowered while in front of the camera. He focuses on removing the stress from the photography process, combining a professional eye for detail with a straightforward approach that ensures every client walks away with high-quality, authentic images.
              </p>
            </div>
          </div>
          <img className="hidden md:inline w-[40%] h-auto object-cover relative z-0 animate-[slideInRight_0.8s_ease-out]" src="/img/sophie.jpg" alt="" />
        </div>
      </section>
      <HomepageGallery />
    </main>
  );
}
