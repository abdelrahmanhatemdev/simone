"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {motion} from "motion/react"

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { bounce, fade, fadeD1, fadeSlideDown, slideTop } from "@/lib/animation";

const slides = [
  { name: "CATERINA ADOLFO", imageSrc: "hero-1", category: "Furnishing" },
  { name: "ENZO", imageSrc: "hero-2", category: "Spaces" },
  { name: "SOFIA", imageSrc: "hero-3", category: "Product Design" },
  { name: "LUCA", imageSrc: "hero-4", category: "Interior Design" },
  { name: "GIULIA", imageSrc: "hero-5", category: "Lighting" },
  { name: "MARCO", imageSrc: "hero-6", category: "Architecture" },
];

function Hero() {
  return (
    <div className="relative h-svh overflow-hidde">
      <motion.div initial="hidden" whileInView="visible" variants={fade}>

      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-next-button",
          prevEl: ".hero-prev-button",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<div class="${className} flex flex-col gap-3 justify-center items-center cursor-pointer"><span class="w-2 h-2 bg-white rounded-full flex items-center justify-center text-[0px]">0${
              index + 1
            }</span><span></span></div>`,
        }}
        autoplay={{ delay: 5000 }}
        className="h-svh overflow-hidden"
        speed={800}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <Image
                src={`/hero/${slide.imageSrc}.webp`}
                alt=""
                height={1080}
                width={1920}
                className="opacity-80 h-full object-cover"
              />
              <div className="w-[80vw] lg:w-[50vw] absolute z-10 bottom-[38vh] start-[5vw] md:start-[27vw] flex flex-col gap-4 lg:gap-[1vw]">
                <span className="font-rajdhani lg:text-[1.5vw] md:text-[2.5vw] tracking-widest">
                  {slide.category}
                </span>
                <h3 className="font-black text-[15vw] sm:lg:text-[5.2vw] leading-[15vw] sm:leading-[8vw] lg:leading-[5.5vw] font-cormorant-garamond max-w-64">
                  {slide.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
      <div className="absolute bottom-[36vh] start-[5vw] md:start-[27vw] z-10 bg-white h-[1px] w-[75vw] md:w-[62vw]"></div>

      <div className="absolute z-10 bottom-[10vh] end-[14vw] flex items-center gap-10 font-cormorant-garamond tracking-widest">
        <button className="hero-prev-button cursor-pointer">Previous</button>
        <div className="h-[1px] w-12 lg:w-[3vw] bg-white"></div>
        <button className="hero-next-button cursor-pointer">Next</button>
      </div>
      <div className="custom-pagination absolute z-10 bottom-0 left-[14vw] flex items-end w-fit gap-4 text-xs"></div>
    </div>
  );
}
export default memo(Hero);
