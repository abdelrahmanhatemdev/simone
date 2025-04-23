import Image from "next/image";
import { memo } from "react";

function Gallery() {
  return (
    <section className="flex gap-10 mt-92"  style={{ marginInline: "calc(10vw + 5rem)" }}>
      <Image
        src={`/gallery/gallery-1.webp`}
        alt=""
        height={800}
        width={700}
        className="w-[700px] h-[820px]"
      />
        <Image
        src={`/gallery/gallery-2.webp`}
        alt=""
        height={550}
        width={500}
        className="mt-72"
      />
    </section>
  );
}
export default memo(Gallery);