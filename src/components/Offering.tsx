import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { cn } from "@/lib/utils";
import { offeringContent } from "@/lib/config";

function Offering() {
  return (
    <section
      className={cn(
        "px-4 py-20 bg-fixed bg-cover bg-no-repeat",
        "bg-[url('/offering_bg.svg')]"
      )}
    >
      <SecondaryHeading label={offeringContent.title} />
      <ul className="flex justify-center pt-12 gap-8">
        {offeringContent.services.map(function (item, index) {
          return (
            <li key={index} className="text-xl font-myFont">
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Offering;
