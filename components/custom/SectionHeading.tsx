"use client"
import { cn } from "@/lib/utils";
import { memo } from "react";
import {motion } from "framer-motion"
import { animate } from "@/lib/animation/animate";

interface SectionHeadingType {
  first: string;
  second: string;
  className?: string;
}

const fillHorizontal = animate({type:"fillHorizontal"})
const fadeSlideUp = animate({type:"fadeSlideUp"})

function SectionHeading({ first, second, className = "" }: SectionHeadingType) {
  return (
    <motion.div initial="visible" whileDrag="hidden" variants={fadeSlideUp} className={cn("flex flex-col gap-2 font-cormorant-garamond tracking-[.2rem] text-lg uppercase md:ms-20", className)}>
      <p>{first}</p>
      <motion.p initial="visible" whileDrag="hidden" variants={fillHorizontal} className="h-[1px] bg-neutral-600 w-[190px]"></motion.p>
      <p>{second}</p>
    </motion.div>
  );
}
export default memo(SectionHeading);
