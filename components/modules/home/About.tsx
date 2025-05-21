import Image from "next/image";
import { memo } from "react";

function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full mt-40 md:mt-92 px-5 lg:p-10 gap-20 lg:gap-0" id="about">
      <div className="w-full md:w-[45vw] md:h-[55vw] ">
        <Image
          src={`/about/about.webp`}
          alt=""
          height={1500}
          width={900}
          className="w-full h-full"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] items-center lg:p-10 gap-16">
        <div className="flex flex-col gap-2 font-cormorant-garamond tracking-[.4rem] text-md uppercase lg:-rotate-90">
          <p className="border-b border-neutral-600 pb-2 w-fit pe-16">
            About
          </p>
          <p>Us</p>
        </div>
        <div className="flex flex-col gap-10 lg:gap-24">
          <h2 className="text-4xl">Luxury Furniture Retail Network</h2>
          <div className="flex flex-col gap-8">
            <p className="leadin-6 md:leading-8 leading-10">
              A premium network of retail stores and showrooms specializing in
              high-end, designer furniture and home décor. It connects
              discerning customers with exclusive brands, offering elegant
              collections, personalized service, and curated interior design
              experiences across multiple locations.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default memo(About);
