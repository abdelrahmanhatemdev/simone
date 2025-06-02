import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo} from "react";

function Logo({
  className
}: Readonly<{ className?: string; invert?: boolean; small?: boolean }>) {


  return (
    <Link className={cn( "flex font-cormorant-garamond text-3xl lg:text-4xl font-bold  items-center lg:items-end leading-6", className)} href="/">
      Simone
    </Link>
  );
}

export default memo(Logo);
