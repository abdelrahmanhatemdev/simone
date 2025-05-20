import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { memo } from "react";

function Menu() {
  return (
    <>
      <Drawer direction="top" modal={false}>
        <DrawerTrigger asChild>
          <button className="group cursor-pointer flex flex-col gap-3 lg:gap-4 w-12 lg:w-16 justify-center">
            <span className="w-[70%] h-[2px] bg-white block"></span>
            <span className="w-[70%] h-[1px] bg-white block group-hover:ms-3 lg:group-hover:ms-5 transition-all duration-300"></span>
            <span className="w-[70%] h-[1px] bg-white block"></span>
          </button>
        </DrawerTrigger>
        <DrawerContent className="data-[vaul-drawer-direction=top]:max-h-full h-[100vh] data-[vaul-drawer-direction=top]:rounded-b-none data-[vaul-drawer-direction=top]:border-b-0 bg-olive/80">
          <DrawerTitle className="hidden">Menu</DrawerTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
            <div>
              <DrawerClose>Close</DrawerClose>
              <ul>
                <li>our story</li>
                <li>projects</li>
                <li>products</li>
                <li>news</li>
                <li>contact us</li>
              </ul>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default memo(Menu);
