"use client";
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { HiOutlineSlash } from "react-icons/hi2";
import dynamic from "next/dynamic";
import { animate } from "@/lib/animation/animate";
const SectionHeading = dynamic(() => import("@/components/custom/SectionHeading"))
const Animate = dynamic(() => import("@/components/custom/Animate"))

const fadeSlideUp = animate({type:"fadeSlideUp"})
const fadeSlideDown = animate({type:"fadeSlideDown"})
const fadeSwiper1 = animate({type:"fade", duration: 1.2})
const fadeSwiper2 = animate({type:"fade", duration: 1, delay: .2})
const fadeSwiper3 = animate({type:"fade", duration: 1, delay: .3})
const fadeBackBox = animate({type:"fade", duration: 5})


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
  const [currentSlide, setcurrentSlide] = useState(1);
  return (
    <section className="mt-20 md:mt-60 px-[5vw] md:px-[10vw] relative" id="products">
      <SectionHeading first="Featured" second="Products"/>
      
      <Animate variants={fadeSlideUp} className="w-full flex justify-center sm:justify-end gap-5 md:gap-20 font-cormorant-garamond text-[5vw] sm:text-[3vw] md:text-[1.3rem] mt-20 md:mt-40 sm:pe-20 font-black text-neutral-400">
        <p className="text-white">Furniture</p>
        <p>Furnitshing</p>
        <p>Lighting</p>
      </Animate>
      <Animate variants={fadeBackBox} className="absolute -z-10 end-[2vw] top-[30vw] md:end-[16vw] md:top-16 w-[70vw] md:w-[50vw] lg:w-[35vw] h-[70vh] md:h-[80vh] bg-olive"/>

      <div className="flex flex-col gap-20 md:gap-40 md:w-[76vw] w-full mt-16 sm:mt-32">
        <div className="flex justify-between">
          <Animate variants={fadeSwiper1} className="w-[26%] h-[24%] mt-[6%] hidden sm:block">
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
              allowTouchMove={false}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={`/products/${slide.imageSrc}.webp`}
                      alt=""
                      height={1080}
                      width={1920}
                      className="h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Animate>
          <Animate variants={fadeSwiper2} className=" w-full h-[70vw] sm:w-[43%] sm:h-[35%]">
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
              allowTouchMove={false}
              onSlideChange={(swiper) => setcurrentSlide(swiper.realIndex + 1)}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={`/products/${slide.imageSrc}.webp`}
                      alt=""
                      height={1080}
                      width={1920}
                      className="h-full object-cover"
                    />
                    <div className="w-[80%] flex flex-col gap-1 absolute z-10 bottom-[5%] start-[5%]">
                      <h3 className="font-black font-cormorant-garamond text-[5vw] md:text-[2vw] leading-[5vw] md:leading-[2vw]">
                        {slide.name}
                      </h3>
                      <span className="font-rajdhani tracking-widest text-[3vw] md:text-[1.3vw]">
                        {slide.category}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Animate>
          <Animate variants={fadeSwiper3} className="w-[26%] h-[24%] mt-[10%] hidden sm:block">
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
              allowTouchMove={false}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full relative overflow-hidden">
                    <Image
                      src={`/products/${slide.imageSrc}.webp`}
                      alt=""
                      height={1080}
                      width={1920}
                      className="h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Animate>
        </div>
        <Animate variants={fadeSlideDown} className="w-full flex items-center justify-center gap-2 tracking-widest">
          <button className="products-prev-button cursor-pointer" aria-label="Prev">
            <IoChevronBackOutline size={30} />
          </button>
          <div className="flex gap-2 text-lg items-center justify-center">
            <span>{currentSlide}</span>
            <HiOutlineSlash size={25} />
            <span className=" text-neutral-500">6</span>
          </div>
          <button className="products-next-button cursor-pointer" aria-label="Next">
            <IoChevronForwardOutline size={30} />
          </button>
        </Animate>
      </div>
    </section>
  );
}
export default memo(Products);
