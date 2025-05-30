import dynamic from "next/dynamic";
import { memo } from "react";

const Hero = dynamic(() => import("@/components/modules/home/Hero"));
const Products = dynamic(() => import("@/components/modules/home/Products"));
const Gallery = dynamic(() => import("@/components/modules/home/Gallery"));
const Projects = dynamic(() => import("@/components/modules/home/Projects"));
const News = dynamic(() => import("@/components/modules/home/News"));
const Sample = dynamic(() => import("@/components/modules/home/Sample"));
const About = dynamic(() => import("@/components/modules/home/About"));
const Footer = dynamic(() => import("@/components/modules/home/Footer"));
function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Gallery />
      <Projects />
      <News />
      <Sample />
      <About />
      <Footer />
    </>
  );
}
export default memo(Home);
