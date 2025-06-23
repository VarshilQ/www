import React from "react";
import SecondaryHeading from "./SecondaryHeading";
import { feedbackContent } from "@/lib/config";
import FeedbackCard from "./FeedbackCard";

function Feedback() {
	return (
		<section className="py-20">
			<SecondaryHeading label={feedbackContent.title} />
			<section className="w-full mx-auto mt-16 p-16 bg-foreground/5 space-y-12 max-w-6xl">
				{feedbackContent.feedbacks.map(function (item, index) {
					return (
						<FeedbackCard
							key={index}
							image={item.image}
							author={item.author}
							quote={item.quote}
						></FeedbackCard>
					);
				})}
			</section>
		</section>
	);
}

export default Feedback;
