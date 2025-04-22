import dynamic from "next/dynamic";
import { memo } from "react";

const Hero = dynamic(() => import("@/components/modules/home/Hero"));
function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
export default memo(Home);
