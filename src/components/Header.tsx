"use client";

import React from "react";
import { navMenu, person } from "@/lib/config";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "w-full z-10 backdrop-blur-sm fixed top-0 inset-x-0 bg-background/50",
        isMenuOpen && "bottom-0 backdrop-blur-2xl",
      )}
    >
      <nav className="w-full max-w-7xl max-md:px-6 mx-auto grid grid-cols-2 md:grid-cols-3 items-center h-20 font-myAltFont">
        {/* Left: Social Icons */}
        <div className="w-full hidden md:block">
          <SocialLinks />
        </div>

        {/* Center: Logo */}
        <Link href={"/"}>
          <Image
            height={"64"}
            width={"160"}
            src={"/icon.svg"}
            className="md:mx-auto"
            alt={person.nickName}
          />
        </Link>

        {/* Right: Menu Icon */}
        <div className="flex justify-end">
          <button
            className="text-2xl cursor-pointer"
            onClick={function () {
              setIsMenuOpen((prev) => !prev);
            }}
          >
            <div className="flex flex-col gap-1">
              {Array.from({ length: 3 }).map(function (_, index) {
                return (
                  <span
                    key={index}
                    className="block h-0.5 w-8 bg-foreground"
                  ></span>
                );
              })}
            </div>
          </button>
        </div>
      </nav>
      {/* Menu */}
      {isMenuOpen && (
        <ul className="w-full h-without-header flex justify-center flex-col max-w-7xl mx-auto text-center">
          {navMenu.links.map(function (item, index) {
            return (
              <Link
                href={item.link}
                key={index}
                onClick={() => setIsMenuOpen(false)}
                className="relative border-b-2 group first:border-t-2 border-foreground/25 font-semibold text-[3rem] py-4"
              >
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-full -z-10 bg-primary",
                    "transform scale-y-0 origin-top transition-transform duration-300 ease-in-out",
                    "group-hover:scale-y-100"
                  )}
                ></div>
                <span className="font-myAltFont">{item.label}</span>
              </Link>
            );
          })}
        </ul>
      )}
    </header>
  );
}

export default Header;
