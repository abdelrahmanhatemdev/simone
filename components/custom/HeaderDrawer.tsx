import { memo, ReactNode } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

interface HeaderDrawerType {
  title?: string;
  trigger: ReactNode;
  children: ReactNode;
  modal?: boolean;
}

function HeaderDrawer({
  trigger,
  title = "Header Menu",
  modal= false,
  children,
}: HeaderDrawerType) {
  return (
    <Drawer direction="top" modal={modal}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=top]:max-h-full h-[100vh] data-[vaul-drawer-direction=top]:rounded-b-none data-[vaul-drawer-direction=top]:border-b-0 bg-olive/90">
        <DrawerTitle className="hidden">{title}</DrawerTitle>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
export default memo(HeaderDrawer);
