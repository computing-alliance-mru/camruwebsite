import Image from "next/image";

type perksContent = {
  readonly perk1title: string;
  readonly perk1content: string;
  readonly perk1: string | null;
  readonly perk2title: string;
  readonly perk2content: string;
  readonly perk2: string | null;
  readonly perk3title: string;
  readonly perk3content: string;
  readonly perk3: string | null;
};

export default function PerksSection({ perks }: { perks: perksContent }) {
  return (
    <section className="container mx-auto p-8 px-4 md:px-8 max-w-screen-xl pb-16">
      <h2 className="text-4xl font-bold font-space text-camru-blue mb-4">
        Perks
      </h2>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-x-8 md:space-y-0">
        <div className="flex flex-col flex-1 border-camru-blue border-l-4 px-5">
          <Image
            src={perks.perk1 || ""}
            alt="Perks"
            className="h-52 mr-auto w-fit"
            width={400}
            height={400}
          />
          <h3 className="text-2xl leading-8 mt-4 font-space text-camru-blue font-semibold">
            {perks.perk1title}
          </h3>
          <p className="text-lg font-plex leading-8">
            A community of like-minded individuals who are passionate about
            technology and innovation.
          </p>
        </div>
        <div className="flex flex-col flex-1 border-camru-blue border-l-4 px-5">
          <Image
            src={perks.perk2 || ""}
            alt="Perks"
            className="h-52 mr-auto w-fit"
            width={400}
            height={400}
          />
          <h3 className="text-2xl leading-8 mt-4 font-space text-camru-blue font-semibold">
            {perks.perk2title}
          </h3>
          <p className="text-lg font-plex leading-8">
            Opportunities to connect with industry professionals and other
            students.
          </p>
        </div>
        <div className="flex flex-col flex-1 border-camru-blue border-l-4 px-5">
          <Image
            src={perks.perk3 || ""}
            alt="Perks"
            className="h-52 mr-auto w-fit"
            width={400}
            height={400}
          />
          <h3 className="text-2xl leading-8 mt-4 font-space text-camru-blue font-semibold">
            {perks.perk3title}
          </h3>
          <p className="text-lg font-plex leading-8">
            Hands-on workshops to help you develop your technical skills.
          </p>
        </div>
      </div>
    </section>
  );
}
