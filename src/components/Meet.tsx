import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { meetMeContent, person } from "@/lib/config";
import Image from "next/image";
import * as motion from "motion/react-client";

function Meet() {
  return (
    <section id="about" className="pt-20">
      <SecondaryHeading label={meetMeContent.title} />
      <motion.section
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-2 border-foreground/10 group w-full mx-auto mt-16 max-w-2xl"
      >
        <Image
          className="w-full object-cover aspect-[4/2] md:grayscale-100 md:group-hover:grayscale-0 transition-all duration-1000 bg-foreground/20"
          src={person.image}
          alt={person.name + " - Software Development Engineer"}
          aria-label={"Image of " + person.name}
          height={200}
          width={600}
        />
        <div className="p-6 space-y-4 group-hover:bg-foreground/20 transition">
          <h3 className="text-xl font-medium leading-tight font-myAltFont">
            {person.name}
          </h3>
          <p className="text-sm text-foreground/80 font-myFont">
            {meetMeContent.content}
          </p>
        </div>
      </motion.section>
    </section>
  );
}

export default Meet;
