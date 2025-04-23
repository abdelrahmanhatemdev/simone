"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const slides = [
  {
    name: "MODERN SOFA",
    imageSrc: "products-1",
    category: "Cozy velvet seating",
  },
  {
    name: "ELEGANT LAMP",
    imageSrc: "products-2",
    category: "Warm ambient light",
  },
  {
    name: "WOODEN TABLE",
    imageSrc: "products-3",
    category: "Minimal rustic finish",
  },
  {
    name: "WALL ART",
    imageSrc: "products-4",
    category: "Abstract canvas beauty",
  },
  { name: "RUG SET", imageSrc: "products-5", category: "Soft neutral tones" },
  { name: "BOOKSHELF", imageSrc: "products-6", category: "Open sleek storage" },
];

function Products() {
  return (
    <section className="py-60 px-40 relative">
      <div></div>
      Products
      <div className="flex gap-10">
        <div className="w-[20vw] h-[14vw] mt-[10vh]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={{
              nextEl: ".products-next-button",
              prevEl: ".products-prev-button",
            }}
            className="w-full h-full"
            speed={800}
            loop={true}
            initialSlide={slides.length - 1}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={`/products/${slide.imageSrc}.webp`}
                    alt=""
                    height={1080}
                    width={1920}
                    className="h-full object-cover opacity-80"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-[32vw] h-[25vw]">

        
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          navigation={{
            nextEl: ".products-next-button",
            prevEl: ".products-prev-button",
          }}
          className="w-full h-full"
          speed={800}
          loop={true}
          initialSlide={0}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src={`/products/${slide.imageSrc}.webp`}
                  alt=""
                  height={1080}
                  width={1920}
                  className="h-full object-cover opacity-80"
                />
                <div className="w-[80vw] flex flex-col gap-1 absolute z-10 bottom-10 start-10">
                  <h3 className="font-black font-cormorant-garamond text-[2vw] leading-[2vw]">
                    {slide.name}
                  </h3>
                  <span className="font-rajdhani tracking-widest">
                    {slide.category}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div className="w-[20vw] h-[14vw] mt-[18vh]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={{
              nextEl: ".products-next-button",
              prevEl: ".products-prev-button",
            }}
            className="w-full h-full"
            speed={800}
            loop={true}
            initialSlide={1}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={`/products/${slide.imageSrc}.webp`}
                    alt=""
                    height={1080}
                    width={1920}
                    className="h-full object-cover opacity-80"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute z-10 bottom-[10vh] end-[14vw] flex items-center gap-10 font-cormorant-garamond tracking-widest">
        <button className="products-prev-button cursor-pointer">
          <IoChevronBackOutline />
        </button>
        <div className="h-[1px] w-12 lg:w-[3vw] bg-white"></div>
        <button className="products-next-button cursor-pointer">
          <IoChevronForwardOutline />
        </button>
      </div>
    </section>
  );
}
export default memo(Products);
