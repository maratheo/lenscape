import nextConfig from "../../next.config";
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
      <HomepageGallery />
    </main>
  );
}
