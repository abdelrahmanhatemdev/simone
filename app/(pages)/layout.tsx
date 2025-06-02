import dynamic from "next/dynamic";
import { ReactNode } from "react";
const MainLayout = dynamic(() => import("@/components/custom/MainLayout"));

function layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>{children}</MainLayout>
  );
}
export default layout;
