import Feedback from "@/components/Feedback";
import FunTrivia from "@/components/FunTrivia";
import Hero from "@/components/Hero";
import Meet from "@/components/Meet";
import Offering from "@/components/Offering";
import Experience from "@/components/Experience";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="w-full h-20 bg-background" />
      <section className="max-w-7xl space-y-20 mx-auto">
        {/* Below header section */}

        {/* Hero section */}
        <Hero />

        {/* Experience section */}
        <Experience />
      </section>

      <section className="my-20">
        {/* Offering section */}
        <Offering />
      </section>

      <section className="max-w-7xl space-y-20 mx-auto">
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
