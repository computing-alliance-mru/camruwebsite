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

type teamContent = {
  slug: string;
  entry: {
    name: string;
    role: string;
    image: string | null;
    linkedin: string | null;
    email: string;
    priority: number | null;
  };
}[];

export default function TeamSection({ team }: { team: teamContent }) {
  team.sort((a, b) => (a.entry.priority || 0) - (b.entry.priority || 0));

  team.forEach((member) => {
    member.entry.role = member.slug;
  });

  return (
    <section className="container mx-auto p-8 px-4 md:px-8 max-w-screen-xl">
      <h2 className="text-4xl font-bold font-space text-camru-blue mb-8">
        Meet the Team
      </h2>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
        {team.slice(0, 3).map((member) => (
          <TeamCard
            key={member.slug}
            name={member.entry.name}
            role={member.entry.role}
            image={member.entry.image || ""}
            email={member.entry.email}
            linkedin={member.entry.linkedin || ""}
            size="large"
          />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {team.slice(3).map((member) => (
          <TeamCard
            key={member.slug}
            name={member.entry.name}
            role={member.entry.role}
            email={member.entry.email}
            linkedin={member.entry.linkedin || ""}
            image={member.entry.image || ""}
          />
        ))}
      </div>
      <Carousel className="md:hidden w-full">
        <CarouselContent>
          {team.map((member) => (
            <CarouselItem key={member.slug}>
              <TeamCard
                name={member.entry.name}
                role={member.entry.role}
                email={member.entry.email}
                linkedin={member.entry.linkedin || ""}
                image={member.entry.image || ""}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-x-1/2 left-0" />
        <CarouselNext className="translate-x-1/2 right-0" />
      </Carousel>
    </section>
  );
}

const TeamCard = ({
  name,
  role,
  image,
  size,
  email,
  linkedin,
}: {
  name: string;
  role: string;
  image: string;
  size?: "large" | "small";
  email: string;
  linkedin: string;
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
      <p className="text-lg font-plex text-camru-black">{role}</p>
      <div className="flex mt-2">
        <a href={linkedin} className="mr-2 text-camru-black">
          <FaLinkedin />
        </a>
        <a href={"mailto:" + email} className="text-camru-black">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};
