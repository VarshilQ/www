import Feedback from "@/components/Feedback";
import FunTrivia from "@/components/FunTrivia";
import Hero from "@/components/Hero";
import Meet from "@/components/Meet";
import Offering from "@/components/Offering";
import Experience from "@/components/Experience";
import Image from "next/image";
import { Metadata } from "next";
import { metaInfo } from "@/lib/meta";

export const metadata: Metadata = {
  title: metaInfo.home.title,
  description: metaInfo.home.description,
  keywords: metaInfo.home.keywords,
};

export default function HomePage() {
  return (
    <main>
      <section className="max-w-7xl space-y-12 lg:space-y-20 mx-auto">
        {/* Hero section */}
        <Hero />

        <section className="w-full max-lg:px-6">
          {/* Experience section */}
          <Experience />
        </section>
      </section>

      <section className="my-12 lg:my-20">
        {/* Offering section */}
        <Offering />
      </section>

      <section className="max-w-7xl max-lg:px-6 mb-12 lg:mb-20 space-y-20 mx-auto">
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
