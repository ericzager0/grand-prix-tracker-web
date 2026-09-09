"use client";

import React, { use, useState, useEffect } from "react";
import { F1_CALENDAR_2026, Race } from "@/utils/races";
import { fetchEventByIdFromBackend } from "@/utils/events";
import { notFound } from "next/navigation";

export default function HotelsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const mockRace = F1_CALENDAR_2026.find((r) => r.id === id);
  const [race, setRace] = useState<Race | null>(mockRace || null);
  const [isLoading, setIsLoading] = useState(!mockRace);

  useEffect(() => {
    if (!mockRace) {
      let isMounted = true;
      fetchEventByIdFromBackend(id)
        .then((data) => {
          if (isMounted) {
            setRace(data);
            setIsLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) setIsLoading(false);
        });
      return () => {
        isMounted = false;
      };
    }
  }, [id, mockRace]);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-[#F3F1EA]">
        <span className="h-8 w-8 rounded-full border-2 border-[#E10600] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!race) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl font-900 tracking-tight md:text-5xl">
          Hotelería para {race.name.replace(" GP", "")}
        </h1>
        <p className="mt-4 text-[#93949F]">
          Paso 1: Seleccioná tu estadía durante el fin de semana del Gran
          Premio.
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
