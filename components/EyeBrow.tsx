import { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className={
        "font-mono inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-[#7C4DFF]"
      }
    >
      <span className="h-1 w-1 rounded-full bg-[#7C4DFF]" />
      {children}
    </span>
  );
}
