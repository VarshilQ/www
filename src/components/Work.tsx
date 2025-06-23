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

function Work() {
  return (
    <section>
      <div className="w-full p-20">
        <SecondaryHeading label={workContent.title} />
        {/* Logo section */}
        <section className="w-full py-24 flex items-center justify-around">
          <RiAppleFill size={64} />
          <RiMetaLine size={64} />
          <RiGoogleLine size={64} />
          <RiTwitterFill size={64} />
          <RiMicrosoftFill size={64} />
        </section>
        {/* Content with image */}
        <div className="w-full gap-6 mx-auto max-w-xl flex items-center justify-center">
          <Image
            src={"/work_img.png"}
            flex-1
            alt={"Image while working"}
            height={400}
            width={250}
            className="h-full bg-primary"
          />
          <div className="flex-1 flex flex-col gap-6">
            {workContent.content.map(function (item, index) {
              return (
                <p key={index} className="text-foreground/80">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
