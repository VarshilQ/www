import LinkButton from "@/components/LinkButton";
import { person } from "@/lib/config";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function NotFound() {
  return (
    <main className="flex flex-col py-12 md:py-20 items-center justify-center text-center">
      <h1 className="text-4xl font-myAltFont font-semibold">
        Nothing to see here!
      </h1>
      {/* 32 words paragraph */}
      <p className="max-w-xl max-md:px-6 font-myFont text-foreground/80 mb-12 mt-4">
        It seems the page you are looking for does not exist. This could be due
        to a mistyped URL or the page being removed. Please check the URL or
        return to the homepage.
      </p>
      <LinkButton
        href="/"
        label={`Meet ${person.nickName}`}
        icon={<RiArrowRightUpLine size={16} />}
      />
    </main>
  );
}
