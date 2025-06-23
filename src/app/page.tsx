import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Below header section */}
      <div className="w-full h-20 bg-background" />

      {/* Hero section */}
      <Hero />

      {/* Work section */}
      <Work />
    </main>
  );
}
