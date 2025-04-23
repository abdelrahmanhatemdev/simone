import dynamic from "next/dynamic";
import { memo } from "react";

const Hero = dynamic(() => import("@/components/modules/home/Hero"));
const Products = dynamic(() => import("@/components/modules/home/Products"));
const Gallery = dynamic(() => import("@/components/modules/home/Gallery"));
function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Gallery />
    </>
  );
}
export default memo(Home);
