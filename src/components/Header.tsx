import React from "react";
import { person } from "@/lib/config";
import { RiMenuLine } from "@remixicon/react";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="w-full z-10 backdrop-blur-sm fixed top-0 inset-x-0 bg-background/50">
      <nav className="w-full max-w-7xl mx-auto grid grid-cols-3 items-center h-20 px-4 font-myAltFont">
        {/* Left: Social Icons */}
        <SocialLinks />

        {/* Center: Logo */}
        <span>
          <Image
            height={"64"}
            width={"160"}
            src={"/icon.svg"}
            className="mx-auto"
            alt={person.nickName}
          />
        </span>

        {/* Right: Menu Icon */}
        <div className="flex justify-end">
          <button className="text-2xl">
            <div className="flex flex-col gap-1">
              {Array.from({ length: 3 }).map(function (_, index) {
                return <span key={index} className="block h-0.5 w-8 bg-foreground"></span>;
              })}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
