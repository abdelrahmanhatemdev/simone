import { memo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import dynamic from "next/dynamic";
import { news } from "@/constants/news";
import { animate } from "@/lib/animation/animate";
const SectionHeading = dynamic(() => import("@/components/custom/SectionHeading"))
const Animate = dynamic(() => import("@/components/custom/Animate"))

const fadeSlideUp = animate({type:"fadeSlideUp"})
const fadeSlideUp1 = animate({type:"fadeSlideUp", duration: 1})
const fade = animate({type:"fade", duration: 2, delay: .2})
const fade1 = animate({type:"fade", duration: 2, delay: .2})

function News() {
  return (
    <section className="mt-40 md:mt-[35vw] mx-5 flex flex-col items-end gap-10 md:gap-40" id="news">
      <SectionHeading first="Our" second="News" className=" md:ms-20 md:me-24"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:mx-[15vw]">
        {news.map((item, i) => (
          <article key={i} className="flex flex-col gap-8">
            <Animate variants={fadeSlideUp} className="text-4xl">{item.title}</Animate>
            <div className="flex flex-col gap-2">
              <Animate variants={fadeSlideUp1} element="p" className="text-neutral-400 tracking-wider text-xl">
                {item.author}, {item.date}
              </Animate>
              <Animate variants={fade}  className="leading-6 md:leading-8 xl:leading-10">{item.description}</Animate>
            </div>
            <Animate variants={fade1}>

            <a href="#">Read more</a>
            </Animate>
          </article>
        ))}
      </div>
    </section>
  );
}
export default memo(News);
