"use client"
import { cn } from "@/lib/utils";
import { memo } from "react";
import { animate } from "@/lib/animation/animate";
import dynamic from "next/dynamic";
const Animate = dynamic(() => import("@/components/custom/Animate"))

interface SectionHeadingType {
  first: string;
  second: string;
  className?: string;
}

const fillHorizontal = animate({type:"fillHorizontal", xTo:190, duration: 1})
const fadeSlideUp = animate({type:"fadeSlideUp"})

function SectionHeading({ first, second, className = "" }: SectionHeadingType) {
  return (
    <Animate variants={fadeSlideUp} className={cn("flex flex-col font-black dark:font-medium gap-2 font-cormorant-garamond tracking-[.2rem] text-lg uppercase md:ms-20", className)}>
      <p>{first}</p>
      <Animate variants={fillHorizontal} element="p" className="h-[1px] bg-neutral-600 w-[190px]"></Animate>
      <p>{second}</p>
    </Animate>
  );
}
export default memo(SectionHeading);
