"use client";

import { notFound, useRouter } from "next/navigation";
import React, { use, useState, useEffect } from "react";
import { F1_CALENDAR_2026, Race } from "@/utils/races";
import { fetchEventByIdFromBackend } from "@/utils/events";
import WarningModal from "@/components/WarningModal";
import RaceHero from "@/components/RaceHero";
import RaceDetailsPanel from "@/components/RaceDetailsPanel";
import RaceBookingSidebar from "@/components/RaceBookingSidebar";

export default function RaceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const mockRace = F1_CALENDAR_2026.find((r) => r.id === id);
  const [race, setRace] = useState<Race | null>(mockRace || null);
  const [isLoading, setIsLoading] = useState(!mockRace);
  const [isWarningDismissed, setIsWarningDismissed] = useState(false);

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
          if (isMounted) {
            setIsLoading(false);
          }
        });
      return () => {
        isMounted = false;
      };
    }
  }, [id, mockRace]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0B10] text-[#F3F1EA]">
        <div className="flex flex-col items-center gap-4">
          <span className="h-8 w-8 rounded-full border-2 border-[#E10600] border-t-transparent animate-spin" />
          <p className="font-mono text-xs uppercase tracking-widest text-[#93949F]">
            Cargando telemetría del Gran Premio...
          </p>
        </div>
      </div>
    );
  }

  if (!race) {
    notFound();
  }

  const raceDate = new Date(race.date);
  const hasPassed = raceDate < new Date();
  const showWarning = hasPassed && !isWarningDismissed;

  return (
    <div className="relative min-h-screen bg-[#0B0B10] pt-20 text-[#F3F1EA] selection:bg-[#E10600] selection:text-white">
      <div className="gpt-carbon pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#E10600]/5 blur-[150px]" />

      <WarningModal
        isOpen={showWarning}
        title="Carrera finalizada"
        message={`El ${race.name} ya se corrió el ${race.badge}. No es posible realizar reservas para eventos pasados.`}
        confirmText="Ver igual"
        cancelText="Volver al calendario"
        severity="warning"
        onConfirm={() => setIsWarningDismissed(true)}
        onCancel={() => router.back()}
      />

      <RaceHero
        img={race.img}
        name={race.name}
        circuit={race.circuit}
        badge={race.badge}
      />

      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col gap-8 px-6 pb-24 lg:flex-row">
        <RaceDetailsPanel blurb={race.blurb} />
        <RaceBookingSidebar
          id={race.id}
          name={race.name}
          hasPassed={hasPassed}
        />
      </div>
    </div>
  );
}
