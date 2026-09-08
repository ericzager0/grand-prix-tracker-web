import CountdownBoxes from "@/components/CoutdownBoxes";
import StatusDot from "./StatusDot";
import { F1_CALENDAR_2026 } from "@/utils/races";

export default function CountdownGp() {
  const today = new Date();
  
  const nextRace = 
    F1_CALENDAR_2026.find((race) => new Date(race.date) > today) || 
    F1_CALENDAR_2026[F1_CALENDAR_2026.length - 1];

  return (
    <div className="gpt-hud-grid relative overflow-hidden rounded-md border border-[#1C1D24] bg-[#131318]/80 p-6 md:p-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <StatusDot />
            <span className="font-mono text-[11px] tracking-[0.3em] text-[#93949F]">
              EN VIVO · PRÓXIMA LARGADA
            </span>
          </div>
          <p className="font-display mt-2 text-xl font-700 md:text-2xl text-[#F3F1EA]">
            {nextRace.name}{" "}
            <span className="text-[#93949F]">— {nextRace.circuit}</span>
          </p>
        </div>

        <CountdownBoxes date={nextRace.date} />
      </div>
    </div>
  );
}