"use client";

import React, { use } from "react";
import { F1_CALENDAR_2026 } from "@/utils/races";
import { notFound } from "next/navigation";

export default function HotelsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const race = F1_CALENDAR_2026.find((r) => r.id === id);

  if (!race) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl font-900 tracking-tight md:text-5xl">
          Hotelería para {race.name.replace(' GP', '')}
        </h1>
        <p className="mt-4 text-[#93949F]">
          Paso 1: Seleccioná tu estadía durante el fin de semana del Gran Premio.
        </p>
      </div>
      
      {/* Placeholder content for hotels */}
      <div className="flex h-64 items-center justify-center rounded-md border border-[#1C1D24] bg-[#0E0E13] p-8 shadow-xl">
        <p className="font-mono text-sm uppercase tracking-widest text-[#5C5D66]">
          Próximamente: Lista de hoteles
        </p>
      </div>
    </div>
  );
}

