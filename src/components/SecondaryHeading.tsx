import React from "react";

interface SecondaryHeadingProps {
  label: string;
}

function SecondaryHeading({ label }: SecondaryHeadingProps) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center">
      <h2 className="text-4xl max-w-lg font-myAltFont font-medium">{label}</h2>
      <div className="flex items-center justify-center gap-4">
        <span className="size-4 rounded-full bg-primary inline-block"></span>
        <span className="size-4 rounded-full bg-primary inline-block"></span>
        <span className="size-4 rounded-full bg-primary inline-block"></span>
      </div>
    </section>
  );
}

export default SecondaryHeading;
