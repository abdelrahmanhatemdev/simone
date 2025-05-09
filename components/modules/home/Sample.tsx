import Image from "next/image";
import { memo } from "react";

function Sample() {
  return (
    <section
      className="flex flex-col md:flex-row gap-24 md:gap-[5vw] mt-40 md:mt-92 mx-5 md:mx-60 justify-end relative"
    >
      <div className="w-full md:w-[45vw] md:h-[55vw]">
        <Image
          src={`/gallery/gallery-3.webp`}
          alt=""
          height={1600}
          width={1000}
          className="w-full h-full"
        />
      </div>
      <div className="absolute -z-10 -start-[4vw] top-[30vw] md:start-[8vw] md:top-[25vw] w-[70vw] md:w-[40vw] h-[50vh] md:h-[32vw] bg-olive"></div>
   
    </section>
  );
}
export default memo(Sample);
