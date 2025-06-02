import Logo from "@/components/custom/Logo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Page"
}

export default function NotFound() {

  return (
    <div className="w-full h-[100svh] flex flex-col justify-center items-center relative">
      <Image
        src={`/hero/hero-1.webp`}
        alt=""
        height={1080}
        width={1920}
        className="opacity-50 absolute inset-0 object-cover -z-1 w-full h-full"
      />

      <div className="flex flex-col items-center justify-between bg-black/10 text-neutral-50  text-xs rounded-md p-2 transition-colors shadow-sm  min-h-64">
        <div className="flex items-center justify-between flex-wrap h-fit p-2 w-full sm:min-w-96">
          <Logo className="z-10" />
          <Link href={`/`} className="z-10 ">
            <span className="bg-black/10 text-neutral-50  text-xs rounded-md p-2 hover:bg-black/50 transition-colors shadow-sm">
              Back to Website
            </span>
          </Link>
        </div>

        <div
          className="flex flex-col gap-4 items-center justify-center rounded-2xl min-w-fit w-full z-10 p-4 grow bg-black/50 text-center"
    
        >
          <p className="text-xl font-bold">Not Found!</p>
          404 Page!
        </div>
      </div>
    </div>
  );
}
