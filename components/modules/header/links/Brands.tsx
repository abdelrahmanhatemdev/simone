
import { DrawerClose } from "@/components/ui/drawer";
import dynamic from "next/dynamic";
import Image from "next/image";
const HeaderDrawer = dynamic(() => import("@/components/custom/HeaderDrawer"));
import { memo } from "react";
import { FaTimes } from "react-icons/fa";
import { PiSquaresFourThin } from "react-icons/pi";

import { brands } from "@/constants/brands";

function Brands() {
  return (
    <HeaderDrawer
      title="Brands"
      trigger={
        <button className="flex gap-4 items-center lg:items-end cursor-pointer">
          <PiSquaresFourThin size={25} />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            Brands
          </span>
        </button>
      }
    >
      <div className="flex flex-col gap-10 px-10 justify-center  w-full h-[100svh]">
        <DrawerClose asChild>
          <div className="flex gap-3 items-center cursor-pointer">
            <FaTimes />
            <span className="uppercase text-neutral-400 tracking-wide font-cormorant-garamond">
              Close
            </span>
          </div>
        </DrawerClose>
        <div className="flex items-center w-full overflow-x-scroll pb-10">
          {brands.map((brand, i) => (
            <div className="flex flex-col gap-5 items-center" key={i}>
              <div className="px-5">
                <Image
                  height={465}
                  width={700}
                  src={brand.image}
                  alt=""
                  className="w-[100vw] md:max-w-[700px] rounded-md border-8 border-neutral-600"
                />
              </div>
              <h3 className="text-3xl border-b border-neutral-500 w-full text-center pb-5 font-cormorant-garamond">
                {brand.name}
              </h3>
              <p className="font-rajdhani">{brand.major}</p>
            </div>
          ))}
        </div>
      </div>
    </HeaderDrawer>
  );
}
export default memo(Brands);
