import { memo } from "react";
import "swiper/css";
import "swiper/css/navigation";
import {
  fadeSlideDown,
  fadeSlideDown1,
  fadeSlideUp2,
} from "@/lib/animation";
import dynamic from "next/dynamic";
import { news } from "@/constants/news";
import { animate } from "@/lib/animation/animate";
const SectionHeading = dynamic(
  () => import("@/components/custom/SectionHeading")
);
const Animate = dynamic(() => import("@/components/custom/Animate"));

const fillVertical = animate({
  type: "fillVertical",
  duration: 2,
  yFrom: .8, 
  yTo: 1
});

function News() {
  return (
    <section
      className="mt-40 md:mt-[35vw] mx-5 flex flex-col items-end gap-10 md:gap-40"
      id="news"
    >
      <SectionHeading
        first="Our"
        second="News"
        className=" md:ms-20 md:me-24"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:mx-[15vw]">
        {news.map((item, i) => (
          <article key={i} className="flex flex-col gap-5">
            <Animate variants={fadeSlideDown} className="text-4xl">
              {item.title}
            </Animate>
            <div className=" ">
              <Animate
                variants={fadeSlideDown1}
                element="p"
                className="dark:text-neutral-400 text-neutral-600 tracking-wider text-xl"
              >
                {item.author}, {item.date}
              </Animate>
            
                <Animate
                  variants={fillVertical}
                  className="leading-6 md:leading-8 xl:leading-10 block overflow-hidden origin-top"
                >
                  {item.description}
                </Animate>
            </div>
            <Animate variants={fadeSlideUp2}>
              <a href="#">Read more</a>
            </Animate>
          </article>
        ))}
      </div>
    </section>
  );
}
export default memo(News);
