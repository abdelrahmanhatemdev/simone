import Image from "next/image";
import { memo } from "react";
import dynamic from "next/dynamic";
import { fadeDu1D1, fadeSlideUp, fadeSlideUp2 } from "@/lib/animation";
import { animate } from "@/lib/animation/animate";
const SectionHeading = dynamic(() => import("@/components/custom/SectionHeading"))
const Animate = dynamic(() => import("@/components/custom/Animate"))

const fillVertical = animate({
  type: "fillVertical",
  duration: 2,
  yFrom: .8, 
  yTo: 1
});
function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full mt-40 md:mt-92 px-5 lg:p-10 gap-20 lg:gap-0" id="about">
      <Animate variants={fadeDu1D1} className="w-full md:w-[45vw] md:h-[55vw] ">
        <Image
          src={`/about/about.webp`}
          alt=""
          height={1500}
          width={900}
          className="w-full h-full"
        />
      </Animate>
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] items-center lg:p-10 gap-16">
         <SectionHeading first="About" second="Us" className="lg:-rotate-90"/>
        <div className="flex flex-col gap-10 lg:gap-24">
          <Animate variants={fadeSlideUp} element="h2" className="text-4xl">Luxury Furniture Retail Network</Animate>
          <div className="flex flex-col gap-8">
            <Animate variants={fillVertical} element="p" className="leadin-6 md:leading-8 leading-10">
              A premium network of retail stores and showrooms specializing in
              high-end, designer furniture and home décor. It connects
              discerning customers with exclusive brands, offering elegant
              collections, personalized service, and curated interior design
              experiences across multiple locations.
            </Animate>
            <Animate variants={fadeSlideUp2}>

            <a href="#">Read more</a>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  );
}
export default memo(About);
