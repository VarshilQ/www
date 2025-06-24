import { workContent } from "@/lib/config";
import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import {
  RiAppleFill,
  RiGoogleLine,
  RiMetaLine,
  RiMicrosoftFill,
  RiTwitterFill,
} from "@remixicon/react";
import Image from "next/image";
import * as motion from "motion/react-client";

function Experience() {
  return (
    <section>
      <div>
        <SecondaryHeading label={workContent.title} />
        {/* Logo section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full my-16 flex items-center gap-12 flex-wrap justify-around"
        >
          <RiAppleFill size={64} />
          <RiMetaLine size={64} />
          <RiGoogleLine size={64} />
          <RiTwitterFill size={64} />
          <RiMicrosoftFill size={64} />
        </motion.section>
        {/* Content with image */}
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full gap-6 group mx-auto max-w-2xl grid md:grid-cols-2 items-center"
        >
          <Image
            // src={workContent.image}
            src={"/offering_bg.svg"}
            alt={"Image while working"}
            height={300}
            width={250}
            className="h-full flex-1 object-cover transition grayscale-100 group-hover:grayscale-0 w-full bg-primary"
          />
          <div className="flex-1 flex flex-col gap-6">
            {workContent.content.map(function (item, index) {
              return (
                <p
                  key={index}
                  className="text-foreground/80 transition group-hover:text-foreground"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
