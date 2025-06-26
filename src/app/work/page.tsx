import { workPageContent } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { metaInfo } from "@/lib/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaInfo.work.title,
  description: metaInfo.work.description,
  keywords: metaInfo.work.keywords,
};

function WorkPage() {
  return (
    <main>
      <section className="my-12 lg:my-20 w-full max-lg:px-6 max-w-7xl mx-auto">
        <h1 className="text-[3rem] leading-none gap-2 flex flex-col text-center font-semibold font-myAltFont">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {workPageContent.title.split(" ")[0]}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary"
          >
            {workPageContent.title.split(" ")[1]}
          </motion.span>
        </h1>
        <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {workPageContent.projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-foreground"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={item.link}>
                <Image
                  src={item.image}
                  aria-label={item.description}
                  title={item.description}
                  alt={item.description}
                  width={640}
                  height={360}
                  className="w-full bg-foreground/20 aspect-[16/9]"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default WorkPage;
