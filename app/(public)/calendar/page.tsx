"use client";

import React, { useState } from "react";
import { F1_CALENDAR_2026 } from "@/utils/races";
import CalendarFilters from "@/components/CalendarFilters";
import CalendarGrid from "@/components/CalendarGrid";

export default function CalendarPage() {
  const currentYear = new Date().getFullYear();
  const [selectedRegion, setSelectedRegion] = useState("Todos");
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  // Filtrado y Ordenamiento
  const filteredRaces = F1_CALENDAR_2026.filter((race) => {
    const raceMonth = new Date(race.date).getMonth() + 1; 
    
    const regionMatch = selectedRegion === "Todos" || race.region === selectedRegion;
    const monthMatch = selectedMonth === null || raceMonth === selectedMonth;

    return regionMatch && monthMatch;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const handleClearFilters = () => {
    setSelectedRegion("Todos");
    setSelectedMonth(null);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B10] pt-24 text-[#F3F1EA] selection:bg-[#E10600] selection:text-white">
      <div className="gpt-carbon pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#E10600]/5 blur-[150px]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-24 md:flex-row">
        
        <CalendarFilters 
          currentYear={currentYear}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />

        <CalendarGrid 
          currentYear={currentYear}
          filteredRaces={filteredRaces}
          onClearFilters={handleClearFilters}
        />

      </div>
    </div>
  );
}