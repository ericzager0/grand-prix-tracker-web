"use client";

import React, { useState } from "react";
import DestinationCard from "../../../components/DestinationsCard"; 
import { F1_CALENDAR_2026 } from "@/utils/races";

const REGIONS = ["Todos", "Norteamérica", "Europa", "Asia", "Medio Oriente", "Latinoamérica"];
const MONTHS = [
  { id: 3, label: "MAR" }, { id: 4, label: "ABR" }, { id: 5, label: "MAY" },
  { id: 6, label: "JUN" }, { id: 7, label: "JUL" }, { id: 8, label: "AGO" },
  { id: 9, label: "SEP" }, { id: 10, label: "OCT" }, { id: 11, label: "NOV" }
];

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

  return (
    <div className="relative min-h-screen bg-[#0B0B10] pt-24 text-[#F3F1EA] selection:bg-[#E10600] selection:text-white">
      <div className="gpt-carbon pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#E10600]/5 blur-[150px]" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-24 md:flex-row">
        
        {/* FILTERS */}
        <aside className="w-full shrink-0 md:w-64">
          <div className="sticky top-28 rounded-md border border-[#1C1D24] bg-[#0E0E13] p-6 shadow-xl">
            <h2 className="font-display mb-6 text-xl font-900 tracking-tight">
              Filtros de Pista
            </h2>
            <div className="mb-8">
              <h3 className="font-mono mb-3 text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                Región
              </h3>
              <div className="flex flex-col gap-1.5">
                {REGIONS.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`group flex items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors ${
                      selectedRegion === region
                        ? "bg-[#1C1D24] text-[#F3F1EA] font-semibold border-l-2 border-[#E10600]"
                        : "bg-transparent text-[#93949F] hover:bg-[#131318] hover:text-[#F3F1EA] border-l-2 border-transparent"
                    }`}
                  >
                    {region}
                    {selectedRegion === region && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E10600]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                  Mes ({currentYear})
                </h3>
                {selectedMonth !== null && (
                  <button 
                    onClick={() => setSelectedMonth(null)}
                    className="font-mono text-[9px] uppercase text-[#E10600] hover:underline"
                  >
                    Limpiar
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {MONTHS.map((month) => {
                  const isActive = selectedMonth === month.id;
                  return (
                    <button
                      key={month.id}
                      onClick={() => setSelectedMonth(isActive ? null : month.id)}
                      className={`rounded-sm border py-2 text-center font-mono text-[10px] font-semibold cursor-pointer transition-all ${
                        isActive
                          ? "border-[#E10600] bg-[#E10600] text-white shadow-[0_0_10px_rgba(225,6,0,0.3)]"
                          : "border-[#1C1D24] bg-[#131318] text-[#5C5D66] hover:border-[#33343D] hover:text-[#F3F1EA]"
                      }`}
                    >
                      {month.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* GRID */}
        <main className="flex-grow">
          <div className="mb-8 border-b border-[#1C1D24] pb-6">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#E10600]">
              TEMPORADA OFICIAL
            </span>
            <h1 className="font-display mt-2 text-4xl font-900 tracking-tight sm:text-5xl">
              Calendario {currentYear}
            </h1>
            <p className="mt-3 text-sm text-[#93949F]">
              {filteredRaces.length} {filteredRaces.length === 1 ? "carrera encontrada" : "carreras encontradas"}.
            </p>
          </div>

          {filteredRaces.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredRaces.map((race, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <DestinationCard name={race.name} img={race.img} circuit={race.circuit} badge={race.badge} blurb={race.blurb} /> 
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-md border border-dashed border-[#33343D] bg-[#0E0E13]">
              <span className="text-4xl">🏁</span>
              <p className="mt-4 font-mono text-xs tracking-widest text-[#93949F]">
                NO HAY CARRERAS EN ESTE SECTOR
              </p>
              <button 
                onClick={() => { setSelectedRegion("Todos"); setSelectedMonth(null); }}
                className="mt-4 text-sm font-semibold text-[#E10600] hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}