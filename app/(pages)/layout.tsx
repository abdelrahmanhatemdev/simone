import dynamic from "next/dynamic";
import { ReactNode } from "react";
const Header = dynamic(() => import("@/components/modules/home/Header"));

function layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Header />
      <>{children}</>
    </main>
  );
}
export default layout;
