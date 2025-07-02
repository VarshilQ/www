import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { JSX } from "react";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  icon?: JSX.Element;
  target?: React.HTMLAttributeAnchorTarget;
}

function LinkButton({ href, label, className, icon, target }: LinkButtonProps) {
  return (
    <Link
      target={target ? target : "_self"}
      className={cn(
        "h-8 group rounded-full text-foreground inline-flex inline-fit",
        className
      )}
      href={href}
    >
      <span className="font-sans font-medium h-full flex items-center justify-center w-fit shrink-0 pr-5">
        {label}
      </span>
      <span className="text-base group-hover:bg-primary group-hover:text-foreground transition-colors duration-300 bg-foreground text-background rounded-full aspect-square full flex items-center justify-center">
        {icon && icon}
      </span>
    </Link>
  );
}

export default LinkButton;
