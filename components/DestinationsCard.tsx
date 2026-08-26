import Image from "next/image";

export interface DestinationCardProps {
    dest: {
        name: string;
        img: string;
        circuit: string;
        badge: string;
        blurb: string;
    };
}

export default function DestinationCard({ dest }: DestinationCardProps) {
    return (
        <div className="group relative h-[420px] overflow-hidden rounded-md border border-[#1C1D24]">
            <Image
                src={dest.img}
                alt={`${dest.circuit}, ${dest.name}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B0B10] via-[#0B0B10]/30 to-transparent" />
            <span
                className={
                "font-mono" +
                " absolute left-4 top-4 rounded-sm border border-[#F3F1EA]/20 bg-[#0B0B10]/70 px-3 py-1 text-[10px] tracking-[0.2em] text-[#F3F1EA] backdrop-blur"
                }
            >
                {dest.badge.toUpperCase()}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className={"font-display" + " text-2xl font-900"}>
                    {dest.name}
                </h3>
                <p className="mt-1 text-xs text-[#B9B8B0]">{dest.circuit}</p>
                <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-[#D8D7CE] opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
                    {dest.blurb}
                </p>
            </div>
        </div>
    );
};