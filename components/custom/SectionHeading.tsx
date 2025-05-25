import { cn } from "@/lib/utils";
import { memo } from "react";

interface SectionHeadingType {
  first: string;
  second: string;
  className?: string;
}

function SectionHeading({ first, second, className = "" }: SectionHeadingType) {
  return (
    <div className={cn("flex flex-col gap-2 font-cormorant-garamond tracking-[.2rem] text-lg uppercase md:ms-20", className)}>
      <p className="border-b border-neutral-600 pb-2 w-fit pe-16 min-w-[190px]">{first}</p>
      <p>{second}</p>
    </div>
  );
}
export default memo(SectionHeading);
