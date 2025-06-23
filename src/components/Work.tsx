import { workContent } from "@/lib/config";
import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import {
	RiAppleFill,
	RiGoogleLine,
	RiMetaLine,
	RiMicrosoftFill,
	RiTwitterFill,
} from "@remixicon/react";
import Image from "next/image";

function Work() {
	return (
		<section>
			<div className="w-full py-20">
				<SecondaryHeading label={workContent.title} />
				{/* Logo section */}
				<section className="w-full my-16 flex items-center justify-around">
					<RiAppleFill size={64} />
					<RiMetaLine size={64} />
					<RiGoogleLine size={64} />
					<RiTwitterFill size={64} />
					<RiMicrosoftFill size={64} />
				</section>
				{/* Content with image */}
				<div className="w-full gap-6 group mx-auto max-w-2xl grid grid-cols-2 items-center">
					<Image
						src={workContent.image}
						alt={"Image while working"}
						height={300}
						width={250}
						className="h-full flex-1 object-cover transition grayscale-100 group-hover:grayscale-0 w-full bg-primary"
					/>
					<div className="flex-1 flex flex-col gap-6">
						{workContent.content.map(function (item, index) {
							return (
								<p key={index} className="text-foreground/80 transition group-hover:text-foreground">
									{item}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Work;
