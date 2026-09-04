import React from "react";
import Image from "next/image";
import { LOGOS_DICT } from "@/utils/banksImages"; 

interface PaymentCardProps {
  brand: string;
  last4: string;
  holderName: string;
  glowColor?: string;
}

export default function PaymentCard({ 
  brand, 
  last4, 
  holderName, 
  glowColor = "#E10600" 
}: PaymentCardProps) {
  return (
    <div className="relative flex h-40 flex-col justify-between overflow-hidden rounded-md border border-[#1C1D24] bg-gradient-to-br from-[#1C1D24] to-[#0B0B10] p-6 shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
      <div 
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl" 
        style={{ backgroundColor: glowColor }}
      />
      
      <div className="flex justify-between">
        <Image 
          src={LOGOS_DICT[brand.toLowerCase()]}
          alt={brand}
          width={40}
          height={24}
        />
        <span className="font-mono text-xs font-bold tracking-widest text-[#93949F] uppercase">
          {brand}
        </span>
        <span className="font-mono text-xs text-[#5C5D66]">
          ••• {last4}
        </span>
      </div>
      
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#5C5D66]">
          Titular
        </span>
        <p className="font-display text-lg font-bold uppercase tracking-widest text-[#F3F1EA] truncate">
          {holderName}
        </p>
      </div>
    </div>
  );
}