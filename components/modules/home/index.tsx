import dynamic from "next/dynamic";
import { memo } from "react";

const Hero = dynamic(() => import("@/components/modules/home/Hero"));
const Products = dynamic(() => import("@/components/modules/home/Products"));
const Gallery = dynamic(() => import("@/components/modules/home/Gallery"));
const Projects = dynamic(() => import("@/components/modules/home/Projects"));
function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Gallery />
      <Projects />
    </>
  );
}
export default memo(Home);
