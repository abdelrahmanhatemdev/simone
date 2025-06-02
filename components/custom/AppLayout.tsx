import dynamic from "next/dynamic";
import { memo, ReactNode } from "react";
const Header = dynamic(() => import("@/components/modules/header"));
function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <main className="relative">
      <Header />
      {children}
    </main>
  );
}

export default memo(AppLayout);
