import dynamic from "next/dynamic";
import { memo } from "react";

const Hero = dynamic(() => import("@/components/modules/home/Hero"));
const Products = dynamic(() => import("@/components/modules/home/Products"));
function Home() {
  return (
    <>
      <Hero />
      <Products />
    </>
  );
}
export default memo(Home);
