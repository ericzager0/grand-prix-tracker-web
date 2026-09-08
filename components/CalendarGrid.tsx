import React from "react";
import DestinationCard from "./DestinationsCard"; 
import { Race } from "@/utils/races";

interface CalendarGridProps {
  currentYear: number;
  filteredRaces: Race[];
  onClearFilters: () => void;
}

export default function CalendarGrid({
  currentYear,
  filteredRaces,
  onClearFilters,
}: CalendarGridProps) {
  return (
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
            onClick={onClearFilters}
            className="mt-4 text-sm font-semibold text-[#E10600] hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </main>
  );
}

