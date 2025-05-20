import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import { PiSquaresFourThin } from "react-icons/pi";
import { IoLockOpen } from "react-icons/io5";

function Header() {
  return (
    <section className="fixed inset-0 z-20 flex justify-between mx-[5vw] md:mx-[8vw] mt-8 h-20">
      <div className="flex gap-5 lg:gap-20 items-center lg:items-end">
        <button className="group cursor-pointer flex flex-col gap-3 lg:gap-4 w-12 lg:w-16 justify-center">
          <span className="w-[70%] h-[3px] bg-white block"></span>
          <span className="w-[70%] h-[1px] bg-white block group-hover:ms-3 lg:group-hover:ms-5 transition-all duration-300"></span>
          <span className="w-[70%] h-[1px] bg-white block"></span>
        </button>
        <button className="flex gap-4 items-center lg:items-end cursor-pointer">
          <FaSearch />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            Search
          </span>
        </button>
      </div>
      <div className="flex font-cormorant-garamond text-3xl lg:text-4xl font-bold  items-center lg:items-end leading-6">P. Simone</div>
      <div className="flex gap-5 lg:gap-20 items-center lg:items-end">
        <button className="flex gap-4 items-center lg:items-end cursor-pointer">
          <PiSquaresFourThin size={25} />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            Brands
          </span>
        </button>
        <button className="flex gap-4 items-center lg:items-end cursor-pointer">
          <IoLockOpen />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            In Stock
          </span>
        </button>
      </div>
    </section>
  );
}
export default memo(Header);
