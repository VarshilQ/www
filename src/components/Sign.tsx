import { cn } from "@/lib/utils";
import React from "react";
import * as motion from "motion/react-client";

interface SignProps {
  className?: string;
  strokeWidth?: number;
}

function Sign(props: SignProps) {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      width="240"
      viewBox="0 0 162 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // d="M13.5 9.5L1 7L106 1L15 13L128 7"
        d="M16.748 9.5L1 7L133.283 1L18.6378 13L161 7"
        className={cn("stroke-primary", props.className)}
        strokeWidth={props.strokeWidth || 2}
      />
    </motion.svg>
  );
}

export default Sign;
