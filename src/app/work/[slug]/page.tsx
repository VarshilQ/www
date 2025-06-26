import LinkButton from "@/components/LinkButton";
import { work } from "@/lib/work";
import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  return Object.keys(work).map((slug) => ({
    slug,
  }));
}

type Params = Promise<{ slug: string }>;

async function WorkDetailsPage({ params }: { params: Params }) {
  const { slug } = await params;
  const currentWork: IWorkDetails | undefined | null = work[slug];

  if (!currentWork) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Work not found</h1>
      </main>
    );
  }

  return (
    <main>
      <section className="w-full py-6 pb-20 max-w-7xl space-y-12 mx-auto max-md:px-6">
        <Image
          height={currentWork.image.height}
          width={currentWork.image.width}
          src={currentWork.image.src}
          alt={currentWork.image.alt}
          aria-label={currentWork.image.alt}
          className="w-full mx-auto bg-foreground/20 aspect-[16/9]"
        />
        <div className="w-full mx-auto gap-12 max-md:flex-col flex">
          <div className="w-2/6">
            <h1 className="font-myAltFont font-semibold text-4xl leading-tight">
              {currentWork.title}
            </h1>
            <p className="font-myFont mt-1 opacity-80">
              {currentWork.description}
            </p>
            <div className="w-2/6 mt-6 h-1 bg-primary"></div>
          </div>
          <div className="w-4/6">
            <div className="space-y-6 mb-12">
              <h2 className="font-myAltFont text-2xl font-semibold">
                Work Summary
              </h2>
              {currentWork.content.map(function (item, index) {
                return (
                  <p
                    key={index}
                    className="font-myFont opacity-80 leading-tight"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            {currentWork.url && (
              <LinkButton
                target="_blank"
                icon={<RiArrowRightUpLine size={16} />}
                label="View Project"
                href={currentWork.url}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkDetailsPage;
