import { Checkbox } from "@/components/ui/checkbox";
import { DrawerClose } from "@/components/ui/drawer";
import dynamic from "next/dynamic";
const HeaderDrawer = dynamic(() => import("@/components/custom/HeaderDrawer"));
import { memo } from "react";
import { FaTimes } from "react-icons/fa";
import { IoLockOpen } from "react-icons/io5";

function InStock() {
  return (
    <HeaderDrawer
      title="In Stock"
      trigger={
        <button
          className="flex gap-4 items-center lg:items-end cursor-pointer"
          aria-label="In Stock"
        >
          <IoLockOpen />
          <span className="uppercase text-neutral-400 tracking-widest text-sm hidden lg:block">
            In Stock
          </span>
        </button>
      }
    >
      <div className="flex px-10 lg:px-[13%] py-20 w-full h-[100svh] justify-end">
        <form className="grid grid-cols-1 bg-black/80 h-fit p-10 pb-32 w-full md:max-w-[500px] gap-2 font-cormorant-garamond">
          <DrawerClose asChild className="flex justify-end">
            <div className="flex gap-3 items-center cursor-pointer">
              <FaTimes />
              <span className="uppercase text-neutral-400 tracking-wide">
                Close
              </span>
            </div>
          </DrawerClose>
          <div className="flex flex-col gap-0">
            <label className="font-lg font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border-0 border-b border-neutral-700 rounded-none w-full outline-0 text-lg px-2"
            />
          </div>
          <div className="flex flex-col gap-0">
            <label className="font-lg font-bold" htmlFor="email">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              className="border-0 border-b border-neutral-700 rounded-none w-full outline-0 text-lg px-2"
            />
          </div>
          <div className="flex flex-col gap-0">
            <label className="font-lg font-bold" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="border-0 border-b border-neutral-700 rounded-none w-full outline-0 text-lg px-2"
            />
          </div>
          <div className="flex flex-col gap-0">
            <label className="font-lg font-bold" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              className="border-0 border-b border-neutral-700 rounded-none w-full outline-0 text-lg px-2"
            />
          </div>
          <div className="flex gap-5 items-center mt-10">
            <Checkbox className="cursor-pointer" id="newsletter" />
            <label
              className="font-lg font-bold cursor-pointer"
              htmlFor="newsletter"
            >
              SUBSCRIBE TO NEWSLETTERS
            </label>
          </div>
          <div className="flex gap-5 items-center justify-end mt-10">
            <button className="uppercase text-lg cursor-pointer">
              Request Stock
            </button>
          </div>
        </form>
      </div>
    </HeaderDrawer>
  );
}
export default memo(InStock);
