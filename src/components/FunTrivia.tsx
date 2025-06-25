import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { funTriviaContent } from "@/lib/config";
import * as motion from "motion/react-client";

function FunTrivia() {
  return (
    <section>
      <SecondaryHeading label={funTriviaContent.title} />
      <section className="w-full font-myFont my-16 gap-6 max-md:flex-col flex justify-between">
        {funTriviaContent.states.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="space-y-2"
          >
            <h3 className="font-myAltFont leading-none text-4xl text-primary">
              {item.value}
            </h3>
            <p className="text-lg">{item.label}</p>
          </motion.div>
        ))}
      </section>
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-base font-myAltFont text-center"
      >
        {funTriviaContent.note}
      </motion.h4>
    </section>
  );
}

export default FunTrivia;
