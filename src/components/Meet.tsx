import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { meetMeContent, person } from "@/lib/config";
import Image from "next/image";

function Meet() {
  return <section className="py-20">
    <SecondaryHeading label={meetMeContent.title}/>
    <section className="group w-full mx-auto mt-16 max-w-2xl">
      <Image className="w-full aspect-[4/2] grayscale-100 group-hover:grayscale-0 transition bg-foreground/20" src={person.image} alt={person.nickName} height={200} width={600} />
      <div className="p-6 border-2 border-foreground/10 space-y-4 group-hover:bg-primary transition">
        <h3 className="text-xl font-medium leading-tight font-myFont">{person.name}</h3>
        <p className="text-sm text-foreground/80 font-myFont">{meetMeContent.content}</p>
      </div>
    </section>
  </section>;
}

export default Meet;
