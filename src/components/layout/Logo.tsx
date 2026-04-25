"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

export default function Logo({
  withText = true,
  href = "/",
}: {
  withText?: boolean;
  href?: string;
}) {
  const { theme } = useTheme();

  const logoSrc = theme === "light" ? "/logo/light.png" : "/logo/dark.png";

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 transition-opacity hover:opacity-95"
      aria-label="GenMedia AI"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={logoSrc}
          alt="GenMedia AI logo"
          fill
          priority
          sizes="48px"
          className="object-contain"
        />
      </div>

      {withText && (
        <div className="flex flex-col leading-none">
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-[1.05rem] font-black tracking-[-0.02em] text-transparent sm:text-lg">
            GenMedia AI
          </span>
        </div>
      )}
    </Link>
  );
}
