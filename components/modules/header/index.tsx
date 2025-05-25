"use client"
import { memo } from "react";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("@/components/modules/header/links/Menu"));
const Search = dynamic(
  () => import("@/components/modules/header/links/Search")
);
const InStock = dynamic(
  () => import("@/components/modules/header/links/InStock")
);
const Brands = dynamic(
  () => import("@/components/modules/header/links/Brands")
);
import {motion} from "framer-motion"
import { fadeSlideUp } from "@/lib/animation";

function Header() {
  return (
    <motion.section className="fixed inset-0 z-20 flex justify-between mx-[5vw] md:mx-[8vw] mt-8 h-20" initial="hidden" whileInView="visible" variants={fadeSlideUp}>
      <div className="flex gap-5 lg:gap-16 items-center lg:items-end">
        <Menu />
        <Search />
      </div>
      <div className="flex font-cormorant-garamond text-3xl lg:text-4xl font-bold  items-center lg:items-end leading-6">
        P. Simone
      </div>
      <div className="flex gap-5 lg:gap-16 items-center lg:items-end">
        <Brands />
        <InStock />
      </div>
    </motion.section>
  );
}
export default memo(Header);
