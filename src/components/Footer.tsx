import { footerContent } from "@/lib/config";
import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer>
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
      <div className="max-w-7xl mx-auto"></div>
		</footer>
	);
}

export default Footer;
