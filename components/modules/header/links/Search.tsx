import { DrawerClose } from "@/components/ui/drawer";
import dynamic from "next/dynamic";
const HeaderDrawer = dynamic(() => import("@/components/custom/HeaderDrawer"));
import { memo } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function Search() {
  return (
    <HeaderDrawer
      title="Search"
      trigger={
        <button
          className="flex gap-4 items-center lg:items-end cursor-pointer"
          aria-label="Search"
        >
          <FaSearch />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            Search
          </span>
        </button>
      }
    >
      <div className="flex flex-col gap-10 px-10 lg:px-[20%] py-20 w-full h-[100svh]">
        <DrawerClose asChild>
          <div className="flex gap-3 items-center cursor-pointer">
            <FaTimes />
            <span className="uppercase text-neutral-400 tracking-wide font-cormorant-garamond">
              Close
            </span>
          </div>
        </DrawerClose>
        <input
          placeholder="Search For Products, Brands And News"
          className="border-0 text-lg md:text-3xl border-b rounded-none w-full outline-0 py-3 md:py-5 font-cormorant-garamond"
        />
      </div>
    </HeaderDrawer>
  );
}
export default memo(Search);
