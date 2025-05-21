import { DrawerClose } from "@/components/ui/drawer";
import dynamic from "next/dynamic";
const HeaderDrawer = dynamic(() => import("@/components/custom/HeaderDrawer"));
import { memo } from "react";
import { FaFacebookF, FaInstagram, FaTimes, FaTwitter } from "react-icons/fa";

function Menu() {
  return (
    <HeaderDrawer
      title="Menu"
      trigger={
        <button className="group cursor-pointer flex flex-col gap-3 lg:gap-4 w-12 lg:w-16 justify-center">
          <span className="w-[70%] h-[2px] bg-white block"></span>
          <span className="w-[70%] h-[1px] bg-white block group-hover:ms-3 lg:group-hover:ms-5 transition-all duration-300"></span>
          <span className="w-[70%] h-[1px] bg-white block"></span>
        </button>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[46%_54%] w-full h-[100svh] overflow-y-scroll gap-10 lg:gap-0">
        <div className="px-10 lg:px-56 py-20 flex flex-col gap-16 lg:gap-40">
          <DrawerClose asChild>
            <div className="flex gap-3 items-center cursor-pointer">
              <FaTimes />
              <span className="uppercase text-neutral-400 tracking-wide font-cormorant-garamond">
                Close
              </span>
            </div>
          </DrawerClose>

          <ul className="flex flex-col gap-6 text-3xl font-cormorant-garamond font-bold capitalize">
            <li>
              <a href="#">our story</a>
            </li>
            <li>
              <a href="#products">products</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>

            <li>
              <a href="#news">news</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#contact">contact us</a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 md:gap-0 ">
          <div className="border-x md:border-e-0 border-neutral-600/70 flex flex-col justify-end gap-10 text-xs ps-10 lg:ps-16 pb-5">
            <div className="flex flex-col gap-2">
              <span>3127 Doctors Drive</span>
              <span>Los Angeles</span>
              <span>California</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>+1-202-555-0186</span>
              <span>+1-202-555-0111</span>
              <span>info@paolosimone.com</span>
            </div>
            <div className="flex gap-2">
              <FaFacebookF size={15} />
              <FaInstagram size={15} />
              <FaTwitter size={15} />
            </div>
          </div>
          <div className="border-x md:border-e-0 border-neutral-600/70 flex flex-col justify-end gap-10 text-xs ps-10 lg:ps-16 pb-5">
            <div className="flex flex-col gap-2">
              <span>Sunday - Thursday</span>
              <span>09.00 A.M - 06.00 P.M</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>+Friday - Sunday</span>
              <span>Appointment Only</span>
            </div>
            <div>Privacy & Cookie Policy</div>
          </div>
        </div>
      </div>
    </HeaderDrawer>
  );
}
export default memo(Menu);
