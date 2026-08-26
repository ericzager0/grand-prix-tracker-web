import Image from "next/image";

export default function Home() {
    return(
        <a href="#inicio" className="flex items-center gap-3">
            <Image
                src="/logo.jpg"
                alt="GrandPrix Tracker"
                height={992}
                width={1072}
                style={{ width: "30px", height: "auto" }}
            />
            <span className="flex flex-col leading-none">
            <span
                className={
                    "font-display" + " text-[15px] font-900 tracking-tight"
                }
            >
                GRAND<span className="text-[#E10600]">PRIX</span>
            </span>
            <span
                className={
                    "font-mono" +
                    " text-[9px] tracking-[0.35em] text-[#93949F]"
                }
            >
                TRACKER
            </span>
            </span>
        </a>
    );
};