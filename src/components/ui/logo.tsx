"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Renders both logo variants stacked and lets CSS (`dark:`) pick the right
 * one — avoids a flash-of-wrong-logo that a JS theme check would cause.
 */
export function Logo({
  className,
  height = 36,
}: {
  className?: string;
  height?: number;
}) {
  const width = Math.round(height * (2074 / 854));

  return (
    <span className={cn("relative inline-block", className)} style={{ height, width }}>
      <Image
        src="/logos/airlabs-light.png"
        alt="AirLabs Solutions"
        fill
        priority
        className="object-contain dark:hidden"
        sizes={`${width}px`}
      />
      <Image
        src="/logos/airlabs-dark.png"
        alt="AirLabs Solutions"
        fill
        priority
        className="hidden object-contain dark:block"
        sizes={`${width}px`}
      />
    </span>
  );
}
