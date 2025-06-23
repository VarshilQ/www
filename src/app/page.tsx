import Feedback from "@/components/Feedback";
import FunTrivia from "@/components/FunTrivia";
import Hero from "@/components/Hero";
import Meet from "@/components/Meet";
import Offering from "@/components/Offering";
import Work from "@/components/Work";
import Image from "next/image";

export default function HomePage() {
	return (
		<main>
			<section className="max-w-7xl mx-auto">
				{/* Below header section */}
				<div className="w-full h-20 bg-background" />

				{/* Hero section */}
				<Hero />

				{/* Work section */}
				<Work />
			</section>

			{/* Offering section */}
			<Offering />

			<section className="max-w-7xl mx-auto">
				{/* Meet section */}
				<Meet />

				{/* Meet section */}
				<Feedback />

				{/* Trivia section */}
				<FunTrivia />
			</section>
		</main>
	);
}
