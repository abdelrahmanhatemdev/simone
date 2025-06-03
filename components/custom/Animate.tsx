"use client";

import {
  motion,
  type AnimationControls,
  type MotionStyle,
  type TargetAndTransition,
  type VariantLabels,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

type MotionElementTag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "main"
  | "nav"
  | "p"
  | "span"
  | "a"
  | "button"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

interface AnimateProps {
  children?: ReactNode;
  variants: Variants;
  element?: MotionElementTag;
  className?: string;
  viewOnce?: boolean;
  style?: MotionStyle;
  animate?:
    | boolean
    | TargetAndTransition
    | VariantLabels
    | AnimationControls;
  exit?: TargetAndTransition | VariantLabels;
  transition?: TargetAndTransition["transition"];
}

const Animate = ({
  children,
  variants,
  element = "div",
  className,
  viewOnce = false,
  style,
  animate,
  exit,
  transition
}: AnimateProps) => {
  const MotionTag = motion[element] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      exit={exit}
      viewport={{ once: viewOnce }}
      variants={variants}
      className={className}
      style={style}
      animate={animate}
      transition={transition}
    >
      {children}
    </MotionTag>
  );
};

export default Animate;
