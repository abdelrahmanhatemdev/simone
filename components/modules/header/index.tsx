import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import { PiSquaresFourThin } from "react-icons/pi";
import { IoLockOpen } from "react-icons/io5";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("@/components/modules/header/links/Menu"));
const Search = dynamic(() => import("@/components/modules/header/links/Search"));
const InStock = dynamic(() => import("@/components/modules/header/links/InStock"));
function Header() {
  return (
    <section className="fixed inset-0 z-20 flex justify-between mx-[5vw] md:mx-[8vw] mt-8 h-20">
      <div className="flex gap-5 lg:gap-16 items-center lg:items-end">
        <Menu />
        <Search/>
      </div>
      <div className="flex font-cormorant-garamond text-3xl lg:text-4xl font-bold  items-center lg:items-end leading-6">
        P. Simone
      </div>
      <div className="flex gap-5 lg:gap-16 items-center lg:items-end">
        <button className="flex gap-4 items-center lg:items-end cursor-pointer">
          <PiSquaresFourThin size={25} />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            Brands
          </span>
        </button>
        <InStock/>
      </div>
    </section>
  );
}
export default memo(Header);
