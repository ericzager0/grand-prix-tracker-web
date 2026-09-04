import Badge from "./Badge";
import { formatRaceDates } from "@/utils/dateTranslate";

export interface ReservationCardProps {
    name: string;
    date: string[];
    items: {
        icon: string;
        label: string;
        active: boolean;
        detail?: string;
    }[];
}

export default function ReservationCard({ name, date, items }: ReservationCardProps) {
    return(
        <div className="group rounded-md border border-[#1C1D24] bg-[#131318] p-1 shadow-md transition-colors hover:border-[#33343D] cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col justify-center border-b border-[#1C1D24] bg-[#0B0B10] p-6 md:w-1/3 md:border-b-0 md:border-r">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#E7B33C]">CONFIRMADO</span>
            <h4 className="font-display mt-2 text-xl font-900 uppercase tracking-tight text-[#F3F1EA]">{name}</h4>
            <span className="mt-1 text-sm text-[#93949F]">{formatRaceDates(date)}</span>
          </div>
          
          <div className="grid grow grid-cols-2 gap-4 p-6 sm:grid-cols-4">
            {items.map((item, index) => (
              <Badge key={index} icon={item.icon} label={item.label} active={item.active} detail={item.detail} />
            ))}
          </div>
        </div>
        <div className="flex justify-end bg-[#0E0E13] px-6 py-3">
          <button className="font-mono text-[10px] font-semibold tracking-widest text-[#93949F] transition-colors hover:text-[#F3F1EA]">
            VER ITINERARIO COMPLETO →
          </button>
        </div>
      </div>
    );
};