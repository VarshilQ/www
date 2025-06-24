import { footerContent, person } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="font-myFont">
      <div className="py-8 flex justify-center flex-col items-center gap-6 bg-primary">
        <h2 className="text-4xl font-myAltFont text-center">
          {footerContent.ctaText}
        </h2>
        <Link
          href={footerContent.ctaLink}
          className="uppercase underline underline-offset-8 tracking-widest font-sans text-sm"
        >
          {footerContent.ctaLabel}
        </Link>
      </div>
      <div className="w-full mt-16 mb-8 flex items-start justify-between max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 items-start max-w-2xl w-full">
          <Image
            src={"/icon.svg"}
            height={"64"}
            width={"160"}
            alt={person.nickName}
          />
          <p className="">{footerContent.description}</p>
          <ul className="flex items-center gap-6">
            {footerContent.links.map(function (link, index) {
              return (
                <Link
                  key={index}
                  className="no-underline font-sans leading-none hover:underline transition underline-offset-8"
                  href={link.link}
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>
		  <p className="font-sans opacity-50">{footerContent.copyright}</p>
        </div>
        <div className="flex flex-col items-end gap-8">
          <SocialLinks />
          <p>{person.email}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
