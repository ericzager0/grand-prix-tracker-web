import Image from 'next/image';

export default function Badge({ icon, label, active, detail }: { icon: string; label: string; active: boolean; detail?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 rounded-sm border p-3 text-center transition-colors ${active ? 'border-[#33343D] bg-[#1C1D24]' : 'border-[#1C1D24] bg-transparent opacity-50'}`}>
      <Image src={icon} alt={label} width={145} height={187} />
      <span className="font-mono text-[9px] uppercase tracking-wider text-[#F3F1EA]">{label}</span>
      {detail && <span className="text-[10px] text-[#E7B33C]">{detail}</span>}
    </div>
  );
}