import React from "react";
import * as motion from "motion/react-client";
import { reachPageContent } from "@/lib/config";
import ReachQuestionnaire from "@/components/ReachQuestionnaire";
import { metaInfo } from "@/lib/meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaInfo.reach.title,
  description: metaInfo.reach.description,
  keywords: metaInfo.reach.keywords,
};

function ReachPage() {
  return (
    <main>
      <section className="my-20 space-y-16 w-full max-w-7xl mx-auto">
        <h1 className="text-[3rem] leading-none gap-2 flex flex-col text-center font-semibold font-myAltFont">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {reachPageContent.title.split(" ")[0]}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary"
          >
            {reachPageContent.title.split(" ")[1]}
          </motion.span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full"
        >
          <ReachQuestionnaire />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mx-auto text-foreground/80 max-w-lg font-myFont text-lg"
        >
          {reachPageContent.content}
        </motion.p>
      </section>
    </main>
  );
}

export default ReachPage;
