import Image from "next/image";
import hero from "../public/hero.svg";

export default function Hero({
  smalltagline,
  bigtagline,
  subtext,
}: {
  smalltagline: string;
  bigtagline: string;
  subtext: string;
}) {
  return (
    <section className="text-camru-black">
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-col justify-center py-12 pb-4 md:py-24 md:pt-32">
        <div className="md:grid md:grid-cols-[3fr_2fr]">
          <div>
            <div className="flex flex-col">
              <p
                className="text-3xl font-bold font-space"
                style={{ color: "#0b9ddd" }}
              >
                {smalltagline}
              </p>
              <p className="text-5xl md:text-7xl font-bold font-space">
                {bigtagline}
              </p>
            </div>
            <div className="flex justify-left mt-4 md:mt-8">
              <p className="text-xl font-plex">{subtext}</p>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={hero}
              alt="CAMRU Logo"
              className="flex-grow w-auto h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
