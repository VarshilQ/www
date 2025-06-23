import { heroContent } from "@/lib/config";
import { RiArrowDownWideLine } from "@remixicon/react";
import React from "react";

function Hero() {
  return (
    <section className="h-without-header flex flex-col w-full">
      <div className="grid gap-6 w-full flex-1 pt-32 pb-24 grid-cols-4">
        {/* Left section */}
        <section className="flex h-full items-start justify-start">
          <p className="font-myFont leading-6 text-lg">{heroContent.left}</p>
        </section>

        {/* Center section */}
        <section className="flex col-span-2 flex-col items-center justify-center text-white">
          <h1 className="text-[5.5vw] leading-none font-myAltFont text-center font-semibold">
            <span className="block">{heroContent.center.split(" ")[0]}</span>
            <span className="block text-primary">
              {heroContent.center.split(" ")[1]}
            </span>
          </h1>
        </section>

        {/* Right section */}
        <section className="flex flex-col gap-12 items-start justify-end">
          <p className="font-myFont leading-6 text-lg">{heroContent.right}</p>
          <p className="uppercase underline underline-offset-8 tracking-widest font-sans text-sm">
            {heroContent.ctaLabel}
          </p>
        </section>
      </div>
      {/* Scroll down icon */}
      <div className="w-full text-white pb-20">
        <RiArrowDownWideLine className="mx-auto" />
      </div>
    </section>
  );
}

export default Hero;
