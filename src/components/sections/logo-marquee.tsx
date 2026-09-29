import Image from "next/image";
import { clientLogos } from "@/data/clients";

export function LogoMarquee() {
  // Repeat so a short list still fills the row, then duplicate for a seamless -50% loop.
  const unit = Array.from({ length: 2 }, () => clientLogos).flat();
  const track = [...unit, ...unit];

  return (
    <section className="border-y border-border bg-white py-6">
      <div className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Trusted by teams building the next thing
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused] sm:gap-20">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className={`relative shrink-0 ${client.className}`}
            >
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
