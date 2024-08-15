"use client";

import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type sponsorContent = {
  slug: string;
  entry: {
    name: string;
    image: string | null;
    priority: number | null;
  };
}[];

export default function SponsorSection({ sponsor }: { sponsor: sponsorContent }) {
  sponsor.sort((a, b) => (a.entry.priority || 0) - (b.entry.priority || 0));

  sponsor.forEach((member) => {
    member.entry.name = member.slug;
  });

  return (
    <section id="sponsors" className="container mx-auto p-8 px-4 md:px-8 max-w-screen-xl">
      <div className="flex flex-col items-center justify-center py-12"> 
      <h2 className="text-4xl font-bold font-space text-camru-blue mb-8 ">
        Our Sponsors
      </h2>      

      </div> 
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
        {sponsor.slice(0, 3).map((member) => (
          <SponsorCard
            key={member.slug}
            name={member.entry.name}
            image={member.entry.image || ""}
            size="large"
          />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {sponsor.slice(3).map((member) => (
          <SponsorCard
            key={member.slug}
            name={member.entry.name}
            image={member.entry.image || ""}
          />
        ))}
      </div>
      <Carousel className="md:hidden w-full">
        <CarouselContent>
          {sponsor.map((member) => (
            <CarouselItem key={member.slug}>
              <SponsorCard
                name={member.entry.name}
                image={member.entry.image || ""}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-x-1/2 left-0" />
        <CarouselNext className="translate-x-1/2 right-0" />
      </Carousel>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-plex leading-8">CAMRU&apos;s success is made possible by the incredible support of our sponsors.</p>
        <a href="EXAMPLE_PDF_FILE" target="_blank" rel="noopener noreferrer" className="leading-4 py-4 px-10 rounded-md bg-[#7289da] hover:bg-[#677bc4] text-white font-semibold cursor-pointer flex flex-row align-middle justify-center transition-all mt-8">
        Become a Sponsor!
        </a>
        </div>
    </section>
  );
}

const SponsorCard = ({
  name,
  image,
  size,
}: {
  name: string;
  image: string;
  size?: "large" | "small";
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={size === "large" ? 225 : 200}
        height={size === "large" ? 225 : 200}
        className="rounded-full"
      />
      <h3 className="text-2xl font-bold font-space text-camru-blue mt-4">
        {name}
      </h3>
    </div>
  );
};
