"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { fadeSlideUp } from "@/lib/animation";

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

const Animate = dynamic(() => import("@/components/custom/Animate"));
const ToggleThemeSwitch = dynamic(
  () => import("@/components/custom/ToggleThemeSwitch")
);
const Logo = dynamic(() => import("@/components/custom/Logo"));


function Header() {
  return (
    <Animate
      className="fixed inset-0 z-20 flex justify-between mx-[5vw] md:mx-[8vw] mt-8 h-20"
      variants={fadeSlideUp}
    >
      <div className="flex gap-5 lg:gap-16 items-center lg:items-end">
        <Menu />
        <Search />
      </div>
      <Logo />

      <div className="flex gap-5 lg:gap-16 items-center lg:items-end">
        <Brands />
        <InStock />
        <ToggleThemeSwitch />
      </div>
    </Animate>
  );
}
export default memo(Header);
