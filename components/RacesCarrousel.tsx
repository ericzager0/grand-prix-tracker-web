import { CALENDAR_TICKER } from "@/utils/mockData/races"; 
import StatusDot from "./StatusDot"; 
import { isToday } from "@/utils/isToday";

export default function RacesCarrousel() {

  return (
    <div className="relative overflow-hidden border-y border-[#1C1D24] bg-[#0E0E13] py-3">
      <div className="gpt-marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...CALENDAR_TICKER, ...CALENDAR_TICKER].map((race, i) => {
          const liveNow = isToday(race.date);

          return (
            <span
              key={i}
              className="font-mono flex items-center gap-3 text-xs tracking-wide text-[#93949F]"
            >
              {liveNow ? (
                <StatusDot ok={false} />
              ) : (
                <span
                  className={race.raced ? " text-emerald-400" : "text-[#E10600]"} 
                >
                  ●
                </span>
              )}
              {race.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}