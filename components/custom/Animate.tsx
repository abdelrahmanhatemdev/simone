"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MotionElementTag = "div" | "section" | "article" | "header" | "footer" | "main" | "nav" | "p" | "span" | "a" | "button";

interface AnimateOptions {
  children?: ReactNode;
  variants: Variants;
  element?: MotionElementTag;
  className?: string;
  viewOnce?: boolean;
}

const Animate = ({
  children,
  variants,
  element = "div",
  className,
  viewOnce = false
}: AnimateOptions) => {
  const MotionTag = motion[element];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewOnce }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default Animate;
