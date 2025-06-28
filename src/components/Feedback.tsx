import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { feedbackContent } from "@/lib/config";
import FeedbackCard from "./FeedbackCard";
import * as motion from "motion/react-client";

function Feedback() {
  return (
    <section>
      <SecondaryHeading label={feedbackContent.title} />
      <section className="w-full mx-auto mt-16 p-6 md:p-16 bg-foreground/5 space-y-12 max-w-6xl">
        {feedbackContent.feedbacks.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="last:border-0 last:pb-0 border-b-2 pb-12 border-primary/20"
          >
            <FeedbackCard
              image={item.image}
              author={item.author}
              quote={item.quote}
            />
          </motion.div>
        ))}
      </section>
    </section>
  );
}

export default Feedback;
