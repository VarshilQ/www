import React from "react";
import * as motion from "motion/react-client";

interface SecondaryHeadingProps {
  label: string;
}

function SecondaryHeading({ label }: SecondaryHeadingProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl max-w-lg font-myAltFont font-medium"
      >
        {label}
      </motion.h2>
      <div className="flex items-center justify-center gap-4">
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="size-4 rounded-full bg-primary inline-block"
        ></motion.span>
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="size-4 rounded-full bg-primary inline-block"
        ></motion.span>
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="size-4 rounded-full bg-primary inline-block"
        ></motion.span>
      </div>
    </section>
  );
}

export default SecondaryHeading;
