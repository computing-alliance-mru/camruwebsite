import Image from "next/image";

export default function ContentSection({
  children,
  title,
  image,
}: {
  children: React.ReactNode;
  title: string;
  image?: string;
}) {
  return (
    <section className="container mx-auto p-8 px-4 md:px-8 max-w-screen-xl pb-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="hidden md:block md:w-1/2 md:mt-0 md:px-8">
          <Image
            src={image || ""}
            alt={title}
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold font-space text-camru-blue mb-2">
            {title}
          </h2>
          <div className="w-64 mr-auto pb-6 mt-4 md:hidden">
            <Image
              src={image || ""}
              alt={title}
              width={400}
              height={400}
              layout="responsive"
            />
          </div>
          <p className="text-xl font-plex leading-8">{children}</p>
        </div>
      </div>
    </section>
  );
}
