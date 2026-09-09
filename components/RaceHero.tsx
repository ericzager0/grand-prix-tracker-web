import React from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface RaceHeroProps {
  img: string;
  name: string;
  circuit: string;
  badge: string;
}

export default function RaceHero({ img, name, circuit, badge }: RaceHeroProps) {
  const router = useRouter();

  return (
    <div className="relative h-[400px] w-full overflow-hidden border-b border-[#1C1D24]">
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0B0B10] via-[#0B0B10]/60 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0B0B10] via-transparent to-transparent" />

      <div className="absolute top-6 left-0 z-10 w-full px-6">
        <div className="mx-auto max-w-7xl">
          <button 
            onClick={() => router.push('/calendar')} 
            className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0B0B10]/50 text-white backdrop-blur transition-colors border border-white/10 hover:bg-white hover:text-[#0B0B10]"
            aria-label="Volver al calendario"
          >
            <ArrowLeft strokeWidth={3} className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-sm tracking-[0.2em] text-[#E10600]">
            {badge.toUpperCase()}
          </span>
          <h1 className="font-display mt-2 text-5xl font-900 tracking-tight sm:text-6xl md:text-7xl">
            {name}
          </h1>
          <p className="mt-3 text-lg text-[#B9B8B0] max-w-2xl">
            {circuit}
          </p>
        </div>
      </div>
    </div>
  );
}

