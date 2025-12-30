import nextConfig from "../../next.config";

export default function Home() {

  return (
    <main>
      <section>
        <div className="flex">
          <div className="flex-1 p-5">
            <h1 className="text-3xl md:text-2xl lg:text-5xl leading-tight drop-shadow-lg font-(family-name:--font-im-fell-double-pica) italic font-stretch-extra-condensed">
              Freelance photography service, providing portraits and event photography for individuals and groups within the local community
            </h1>
          </div>
          {/* <div className="w-1/2 h-[1000px]" style={{ backgroundImage: `url('${nextConfig.basePath}/img/sun-spot.jpg')` }}>
          </div> */}
          <img className="w-[40%] h-auto" src={`${nextConfig.basePath}/img/sophie.jpg`} alt="" />
        </div>
      </section>
    </main>
  );
}
