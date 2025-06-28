import Image from "next/image";
import React from "react";

interface FeedbackCardProps {
  image: string;
  author: string;
  quote: string;
}

function FeedbackCard(props: FeedbackCardProps) {
  return (
    <div className="flex max-md:flex-col gap-8 font-myFont">
      <Image
        src={props.image}
        height={100}
        width={100}
        alt={props.author}
        className="rounded-full object-cover size-24 bg-foreground/20"
      />
      <div className="flex flex-col gap-4">
        <p className="text-xl pl-6 border-l-2 border-primary leading-8">
          {props.quote}
        </p>
        <h4 className="text-foreground/50 font-myAltFont">{props.author}</h4>
      </div>
    </div>
  );
}

export default FeedbackCard;
