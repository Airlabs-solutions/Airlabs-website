import Image from "next/image";
import { clientLogos } from "@/data/clients";

export function LogoMarquee() {
  // Duplicate the list so the CSS animation (translateX -50%) loops seamlessly.
  const track = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-border bg-surface/40 py-10">
      <div className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Trusted by teams building the next thing
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 [animation-play-state:running] hover:[animation-play-state:paused]">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="relative h-12 w-32 shrink-0 grayscale transition-all hover:grayscale-0"
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
