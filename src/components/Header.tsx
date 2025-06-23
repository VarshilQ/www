import React from "react";
import { socialMediaLinks } from "@/lib/config";
import {
  RiMenuLine,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "@remixicon/react";

function Header() {
  return (
    <header className="w-full fixed top-0 inset-x-0 grid grid-cols-3 items-center h-20 px-16 bg-background/50 font-myAltFont">
      {/* Left: Social Icons */}
      <div className="flex gap-12">
        <a
          href={socialMediaLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterFill size={16} className="cursor-pointer transition" />
        </a>
        <a
          href={socialMediaLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinBoxFill size={16} className="cursor-pointer transition" />
        </a>
        <a
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubFill size={16} className="cursor-pointer transition" />
        </a>
        <a
          href={socialMediaLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookCircleFill
            size={16}
            className="cursor-pointer transition"
          />
        </a>
      </div>

      {/* Center: Logo */}
      <span className="text-4xl font-semibold leading-none text-center font-signature">
        Varshil J. Patel
      </span>

      {/* Right: Menu Icon */}
      <div className="flex justify-end">
        <button className="text-2xl">
          <RiMenuLine />
        </button>
      </div>
    </header>
  );
}

export default Header;
