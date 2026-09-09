"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Race } from "@/utils/races";
import { fetchEventsFromBackend } from "@/utils/events";
import CalendarFilters from "@/components/CalendarFilters";
import CalendarGrid from "@/components/CalendarGrid";

export default function CalendarPage() {
  const currentYear = new Date().getFullYear();
  const [races, setRaces] = useState<Race[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedRegion, setSelectedRegion] = useState("Todos");
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const loadRaces = () => {
    setIsLoading(true);
    setError(null);
    fetchEventsFromBackend()
      .then((data) => {
        setRaces(data);
        setIsLoading(false);
      })
      .catch((err: unknown) => {
        console.error("Error al cargar eventos del calendario:", err);
        const message =
          err instanceof Error
            ? err.message
            : "Error al conectar con el servidor de eventos.";
        setError(message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    let isMounted = true;
    fetchEventsFromBackend()
      .then((data) => {
        if (isMounted) {
          setRaces(data);
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          console.error("Error al cargar eventos del calendario:", err);
          const message =
            err instanceof Error
              ? err.message
              : "Error al conectar con el servidor de eventos.";
          setError(message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Filtrado y Ordenamiento
  const filteredRaces = useMemo(() => {
    return races
      .filter((race) => {
        const raceMonth = new Date(race.date).getMonth() + 1;

        const regionMatch =
          selectedRegion === "Todos" || race.region === selectedRegion;
        const monthMatch =
          selectedMonth === null || raceMonth === selectedMonth;

        const searchLower = searchQuery.toLowerCase().trim();
        const textMatch =
          !searchLower ||
          race.name.toLowerCase().includes(searchLower) ||
          race.circuit.toLowerCase().includes(searchLower) ||
          race.region.toLowerCase().includes(searchLower);

        return regionMatch && monthMatch && textMatch;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [races, selectedRegion, selectedMonth, searchQuery]);

  const handleClearFilters = () => {
    setSelectedRegion("Todos");
    setSelectedMonth(null);
    setSearchQuery("");
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
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isLoading={isLoading}
          error={error}
          onRetry={loadRaces}
        />
      </div>
    </div>
  );
}
