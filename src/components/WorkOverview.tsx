"use client";

import React, { useRef } from "react";
import SecondaryHeading from "./SecondaryHeading";
import { WorkOverviewContent } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";

function WorkOverview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Adjust -100% as needed for your desired scroll distance

  return (
    <section
      ref={containerRef}
      className="space-y-16 flex flex-col h-[calc(100dvh/2)] sm:h-[calc(100dvh/1.5)] overflow-hidden"
    >
      <SecondaryHeading label={WorkOverviewContent.title} />
      <motion.div style={{ x }} className="flex gap-8 flex-1">
        {Array.from({ length: 6 }).map(function (_, index) {
          return (
            <div className="h-full aspect-[16/9] bg-primary" key={index} />
          );
        })}
      </motion.div>
    </section>
  );
}

export default WorkOverview;

// --- Slide on scroll --- //

// "use client";

// import React, { useRef } from "react";
// import SecondaryHeading from "./SecondaryHeading";
// import { WorkOverviewContent } from "@/lib/config";
// import { motion, useScroll, useTransform } from "framer-motion";

// function WorkOverview() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Adjust -100% as needed for your desired scroll distance

//   return (
//     <section
//       ref={containerRef}
//       className="space-y-16 flex flex-col h-[calc(100dvh/1.5)] overflow-hidden"
//     >
//       <SecondaryHeading label={WorkOverviewContent.title} />
//       <motion.div style={{ x }} className="flex gap-8 flex-1">
//         {Array.from({ length: 6 }).map(function (_, index) {
//           return (
//             <div className="h-full aspect-[16/9] bg-primary" key={index} />
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// }

// export default WorkOverview;
