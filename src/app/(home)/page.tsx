import { Hero } from "@/components/sections/hero";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { TechStack } from "@/components/sections/tech-stack";
import { CTABanner } from "@/components/sections/cta-banner";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";

export default function Home() {
  return (
    <>
      <FaqJsonLd />
      <Hero />
      <About />
      <LogoMarquee />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Faq />
      <TechStack />
      <CTABanner />
    </>
  );
}
