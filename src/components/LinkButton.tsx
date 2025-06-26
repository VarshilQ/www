import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { Children, JSX } from "react";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  icon?: JSX.Element;
}

function LinkButton({ href, label, className, icon }: LinkButtonProps) {
  return (
    <Link
      className={cn("h-10 rounded-full text-background inline-flex p-1 inline-fit bg-foreground", className)}
      href={href}
    >
      <span className="font-sans font-medium h-full flex items-center justify-center px-5">{label}</span>
      <span className="text-base text-foreground bg-background rounded-full aspect-square h-full flex items-center justify-center">{icon && icon}</span>
    </Link>
  );
}

export default LinkButton;
