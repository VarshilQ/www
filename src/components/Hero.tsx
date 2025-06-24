import { heroContent, person } from "@/lib/config";
import { RiArrowDownLongLine, RiArrowDownWideLine } from "@remixicon/react";
import Sign from "./Sign";
import React from "react";
import * as motion from "motion/react-client";

function Hero() {
  return (
    <section className="relative h-without-header overflow-hidden flex flex-col w-full">
      <img
        alt={person.name}
        className="absolute aspect-square -z-10 h-full inset-y-0 left-16"
        src={"/hero_bg.svg"}
      />
      <div className="grid gap-6 w-full flex-1 pt-32 pb-24 grid-cols-4">
        {/* Left section */}
        <section className="flex h-full items-start justify-start">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-myFont leading-6 text-lg"
          >
            {heroContent.left}
          </motion.p>
        </section>

        {/* Center section */}
        <section className="flex col-span-2 flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[5.5vw] mb-2 leading-none font-myAltFont text-center font-semibold"
          >
            <span className="block">{heroContent.center.split(" ")[0]}</span>
            <span className="block text-primary">
              {heroContent.center.split(" ")[1]}
            </span>
          </motion.h1>
          <Sign />
        </section>

        {/* Right section */}
        <motion.section
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12 items-start justify-end"
        >
          <p className="font-myFont leading-6 text-lg">{heroContent.right}</p>
          <p className="uppercase underline underline-offset-8 tracking-widest font-sans text-sm">
            {heroContent.ctaLabel}
          </p>
        </motion.section>
      </div>
      {/* Scroll down icon */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="mx-auto bg-foreground text-background py-2 px-1 rounded-full mb-20"
      >
        <RiArrowDownLongLine size={16} />
      </motion.div>
    </section>
  );
}

export default Hero;
