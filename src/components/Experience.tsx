import { person, experienceContent } from "@/lib/config";
import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import {
  RiAppleFill,
  RiGoogleLine,
  RiMetaLine,
  RiMicrosoftFill,
} from "@remixicon/react";
import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";

function Experience() {
  return (
    <section>
      <div>
        <SecondaryHeading label={experienceContent.title} />
        {/* Logo section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full my-16 md:my-24 grid items-center gap-12 grid-cols-3 md:grid-cols-5 justify-items-center"
        >
          <Link
            href={"https://orglife.co.in"}
            aria-label={person.name + " worked at Orglife Industries Pvt. Ltd."}
          >
            <Image
              width={64}
              height={64}
              src={"/icons/orglife.svg"}
              alt={person.name + " worked at Orglife Industries Pvt. Ltd."}
            />
          </Link>
          <div className="blur-sm">
            <RiGoogleLine size={64} />
          </div>
          <div className="blur-sm">
            <RiAppleFill size={64} />
          </div>
          <div className="blur-sm">
            <RiMetaLine size={64} />
          </div>
          <div className="blur-sm">
            <RiMicrosoftFill size={64} />
          </div>
        </motion.section>
        {/* Content with image */}
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full gap-6 group mx-auto max-w-2xl flex max-sm:flex-col items-center"
        >
          <Image
            src={experienceContent.image}
            alt={"Image while working"}
            height={400}
            width={300}
            className="w-full sm:h-full flex-1 aspect-[4/3] sm:aspect-[3/4] object-cover transition-all duration-1000 md:grayscale-100 md:group-hover:grayscale-0"
          />
          <div className="flex-1 flex flex-col gap-6">
            {experienceContent.content.map(function (item, index) {
              return (
                <p
                  key={index}
                  className="text-foreground/80 font-myFont transition group-hover:text-foreground"
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
