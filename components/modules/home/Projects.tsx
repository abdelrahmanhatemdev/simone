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
    <section className="mt-20 md:mt-96 px-[5vw] md:pe-0 md:ps-[10vw] relative" id="projects">
      <div className="flex md:gap-3 md:justify-end w-full flex-wrap">
        <div className="w-auto md:w-[10%] order-1 md:order-1 h-[50%] mt-64 ms-7 md:ms-0 flex flex-col gap-2 font-cormorant-garamond tracking-[.4rem] text-md uppercase -rotate-90 origin-left">
          <p className="border-b border-neutral-600 pb-2 w-fit pe-16">
            Featured
          </p>
          <p>Projects</p>
        </div>
        <div className="order-3 md:order-2 md:w-[20%] lg:w-[30%] w-full mt-5 md:mt-64 sm:block">
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
            allowTouchMove={false}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-2">
                  <h3 className="font-black font-cormorant-garamond text-[5vw] md:text-[2vw] leading-[5vw] md:leading-[2vw]">
                    {slide.name}
                  </h3>
                  <p className="text-xl">{slide.spec}</p>
                  <p className="my-4">{slide.city}</p>
                  <span className="text-[3vw] md:text-[1vw]">
                    {slide.description}
                  </span>
                  <span>Read More</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full flex items-center gap-2 tracking-widest">
            <button className="products-prev-button cursor-pointer" aria-label="Prev">
              <IoChevronBackOutline size={30} />
            </button>
            <div className="flex gap-2 text-lg items-center justify-center">
              <span>{currentSlide}</span>
              <HiOutlineSlash size={25} />
              <span className=" text-neutral-500">3</span>
            </div>
            <button className="products-next-button cursor-pointer" aria-label="Next">
              <IoChevronForwardOutline size={30} />
            </button>
          </div>
        </div>
        <div className="order-2 md:order-3 w-full md:w-[60%] lg:w-[40%] mt-[20vw] md:mt-0 ">
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
            allowTouchMove={false}
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

      <div className="absolute -z-10 end-[2vw] top-[30vw] md:end-[8vw] md:top-[25vw] w-[70vw] md:w-[45vw] h-[70vh] md:h-[45vh] bg-olive"></div>
    </section>
  );
}
export default memo(Projects);
