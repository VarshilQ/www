import { heroContent, person } from "@/lib/config";
import { RiArrowDownLongLine } from "@remixicon/react";
import Sign from "./Sign";
import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";

function Hero() {
  return (
    <section className="max-lg:px-6 relative min-h-[calc(100vh-5rem)] lg:min-h-without-header lg:h-without-header overflow-hidden flex flex-col w-full">
      <img
        alt={person.name}
        className="absolute aspect-square -z-10 h-full inset-y-0 object-cover left-0 md:left-16"
        src={"/hero_bg.svg"}
      />
      <div className="grid gap-8 lg:gap-6 w-full flex-1 max-lg:content-center lg:pt-32 pt-12 pb-12 grid-cols-1 lg:grid-cols-4">
        {/* Left section */}
        <section className="order-2 lg:h-full lg:order-none flex h-fit items-start justify-start">
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
        <section className="order-1 lg:order-none flex lg:col-span-2 flex-col items-center justify-center text-foreground">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12vw] md:text-[10vw] lg:text-[5.5rem] mb-2 leading-none font-myAltFont text-center font-semibold"
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
          className="flex order-3 lg:order-none flex-col gap-8 lg:gap-12 items-start justify-end"
        >
          <p className="font-myFont leading-6 text-lg">{heroContent.right}</p>
          <Link href={heroContent.ctaLink} className="uppercase underline underline-offset-8 tracking-widest font-sans text-sm">
            {heroContent.ctaLabel}
          </Link>
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
        className="mx-auto hidden lg:block bg-foreground text-background py-2 px-1 rounded-full mb-12 lg:mb-20"
      >
        <RiArrowDownLongLine size={16} />
      </motion.div>
    </section>
  );
}

export default Hero;
