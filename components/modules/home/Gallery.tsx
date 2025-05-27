import { animate } from "@/lib/animation/animate";
import dynamic from "next/dynamic";
import Image from "next/image";
import { memo } from "react";
const Animate = dynamic(() => import("@/components/custom/Animate"))

const fadeSlideDown = animate({type:"fadeSlideDown", yFrom: 100, duration: 1.5})
const fadeSlideUp = animate({type:"fadeSlideUp", yFrom: 100, duration: 1.5})

function Gallery() {
  return (
    <section
      className="flex flex-col md:flex-row gap-24 md:gap-[5vw] mt-40 md:mt-92 mx-5 md:mx-40 justify-center"
    >
      <Animate variants={fadeSlideDown} viewOnce={true} className="w-full md:w-[38vw] md:h-[47vw]">
        <Image
          src={`/gallery/gallery-1.webp`}
          alt=""
          height={850}
          width={700}
          className="w-full h-full"
        />
      </Animate>
      <Animate variants={fadeSlideUp} viewOnce={true} className="w-full md:w-[30vw] md:h-[35vw]">
        <Image
          src={`/gallery/gallery-2.webp`}
          alt=""
          height={650}
          width={500}
          className="md:mt-[20vw] w-full h-full"
        />
      </Animate>
    </section>
  );
}
export default memo(Gallery);
