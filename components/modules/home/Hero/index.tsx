"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const slides = [
  { name: "CATERINA ADOLFO", imageSrc: "hero-1", category: "Furnishing" },
  { name: "ENZO", imageSrc: "hero-2", category: "Architecture" },
  { name: "SOFIA", imageSrc: "hero-3", category: "Interior Design" },
  { name: "LUCA", imageSrc: "hero-4", category: "Product Design" },
  { name: "GIULIA", imageSrc: "hero-5", category: "Lighting" },
  { name: "MARCO", imageSrc: "hero-6", category: "Spaces" },
];

function Hero() {
  return (
    <div className="relative h-svh overflow-hidde">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) =>
            `<div class="${className} flex flex-col gap-3 justify-center items-center cursor-pointer"><span class="w-2 h-2 bg-white rounded-full flex items-center justify-center text-[0px]">0${index + 1}</span><span></span></div>`,
        }}
        autoplay={{ delay: 5000 }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
                className="opacity-80"
              />
              <div className="w-[80vw] lg:w-[50vw] absolute z-10 bottom-[40vh] start-[27vw] flex flex-col gap-10">
                <span className="font-rajdhani text-2xl tracking-widest">
                  {slide.category}
                </span>
                <h3 className="font-black text-8xl font-cormorant-garamond lg:max-w-64">
                  {slide.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-[36vh] start-[27vw] z-10 bg-white h-[1px] w-[65vw]"></div>
      </Swiper>

      <div className="absolute z-10 bottom-[10vh] end-[14vw] flex items-center gap-10 font-cormorant-garamond tracking-widest">
        <button className="prev-button cursor-pointer">Previous</button>
        <div className="h-[1px] w-12 lg:w-[3vw] bg-white"></div>
        <button className="next-button cursor-pointer">Next</button>
      </div>
      <div className="custom-pagination absolute z-10 bottom-0 left-[14vw] flex items-end w-fit gap-4 text-xs"></div>
   
     </div>
  );
}
export default memo(Hero);
