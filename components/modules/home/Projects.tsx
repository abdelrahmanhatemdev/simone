"use client";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { HiOutlineSlash } from "react-icons/hi2";

const slides = [
  {
    name: "Grande Villa",
    spec: "Large Space",
    city: "Cornell",
    description:
      "A modern villa blending clean geometry with warm materials, designed for luxurious yet minimal living.",
    imageSrc: "project-1",
  },
  {
    name: "Loft Serenity",
    spec: "Urban Loft",
    city: "Brooklyn",
    description:
      "Industrial textures meet cozy tones in this open-concept loft tailored for creative professionals.",
    imageSrc: "project-2",
  },
  {
    name: "Casa Verde",
    spec: "Eco Home",
    city: "Lisbon",
    description:
      "Sustainable materials and natural light define this tranquil home inspired by Mediterranean living.",
    imageSrc: "project-3",
  },
];

function Projects() {
  const [currentSlide, setcurrentSlide] = useState(1);
  return (
    <section className="mt-20 md:mt-60 px-[5vw] md:px-[10vw] relative">
      <div className="flex flex-col gap-2 font-cormorant-garamond tracking-[.2rem] text-lg uppercase  md:ms-20">
        <p className="border-b border-neutral-600 pb-2 w-fit pe-16">Featured</p>
        <p>Projects</p>
      </div>
      <div className="absolute -z-10 end-[2vw] top-[30vw] md:end-[16vw] md:top-16 w-[70vw] md:w-[50vw] lg:w-[35vw] h-[70vh] md:h-[80vh] bg-olive"></div>

      <div className="flex flex-col gap-20 md:gap-40 md:w-[76vw] w-full mt-16 sm:mt-32">
        <div className="flex justify-between">
          <div className="w-[26%] h-[24%] mt-[6%] hidden sm:block">
            <Swiper
              modules={[Navigation]}
              spaceBetween={1}
              slidesPerView={1}
              navigation={{
                nextEl: ".products-next-button",
                prevEl: ".products-prev-button",
              }}
              className="w-full h-full"
              speed={500}
              loop={true}
              initialSlide={slides.length - 1}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col">
                    <h3 className="font-black font-cormorant-garamond text-[5vw] md:text-[2vw] leading-[5vw] md:leading-[2vw]">
                      {slide.name}
                    </h3>
                    <p>{slide.spec}</p>
                    <p>{slide.city}</p>
                    <span className="font-rajdhani tracking-widest text-[3vw] md:text-[1.3vw]">
                      {slide.description}
                    </span>
                    <span>Read More</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className=" w-full h-[70vw] sm:w-[43%] sm:h-[35%]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={1}
              slidesPerView={1}
              navigation={{
                nextEl: ".products-next-button",
                prevEl: ".products-prev-button",
              }}
              className="w-full h-full"
              speed={500}
              loop={true}
              initialSlide={0}
              onSlideChange={(swiper) => setcurrentSlide(swiper.realIndex + 1)}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={`/projects/${slide.imageSrc}.webp`}
                      alt=""
                      height={1080}
                      width={1920}
                      className="h-full object-cover opacity-90"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-2 tracking-widest">
          <button className="products-prev-button cursor-pointer">
            <IoChevronBackOutline size={30} />
          </button>
          <div className="flex gap-2 text-lg items-center justify-center">
            <span>{currentSlide}</span>
            <HiOutlineSlash size={25} />
            <span className=" text-neutral-500">6</span>
          </div>
          <button className="products-next-button cursor-pointer">
            <IoChevronForwardOutline size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
export default memo(Projects);
