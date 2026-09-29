import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { TechStack } from "@/components/sections/tech-stack";
import { CTABanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <TechStack />
      <CTABanner />
    </>
  );
}
