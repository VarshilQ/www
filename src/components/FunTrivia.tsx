import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { funTriviaContent } from "@/lib/config";

function FunTrivia() {
	return (
		<section className="py-20">
			<SecondaryHeading label={funTriviaContent.title} />
			<section className="w-full font-myFont my-16 flex justify-between">
				{funTriviaContent.states.map(function (item, index) {
					return (
						<div key={index} className="space-y-2">
							<h3 className="font-myAltFont leading-none text-4xl text-primary">{item.value}</h3>
							<p className="text-lg">{item.label}</p>
						</div>
					);
				})}
			</section>
      <h4 className="text-base text-center">{funTriviaContent.note}</h4>
		</section>
	);
}

export default FunTrivia;
