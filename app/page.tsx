import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavMenu from "@/components/NavMenu";
import PerksSection from "@/components/PerksSection";
import TeamSection from "@/components/TeamSection";

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";
import CTA from "@/components/CTA";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const heroContent = await reader.singletons.hero.read();
  const aboutUsContent = await reader.singletons.aboutus.read();
  const perksContent = await reader.singletons.perks.read();

  const teamContent = await reader.collections.executives.all();

  return (
    <main className="font-plex">
      <NavMenu />
      <Hero
        smalltagline={heroContent?.smalltagline || ""}
        bigtagline={heroContent?.bigtagline || ""}
        subtext={heroContent?.subtext || ""}
      />
      <ContentSection
        title="About Us"
        image={aboutUsContent?.aboutusimage || ""}
      >
        {aboutUsContent?.aboutus}
      </ContentSection>
      {perksContent && <PerksSection perks={perksContent} />}
      {teamContent && <TeamSection team={teamContent} />}
      <CTA />
      <Footer />
    </main>
  );
}
