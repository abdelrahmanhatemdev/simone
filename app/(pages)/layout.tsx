import dynamic from "next/dynamic";
import { ReactNode } from "react";
const Header = dynamic(() => import("@/components/modules/header"));

function layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Header />
      <>{children}</>
    </main>
  );
}
export default layout;
