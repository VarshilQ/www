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
    <Link className={cn("h-12 p-1 bg-white", className)} href={href}>
      <span className="inline-block px-12">{label}</span>
      {icon ? icon : <></>}
    </Link>
  );
}

export default LinkButton;
