import React, { useState } from "react";
import ButtonChecker from "@/components/ButtonChecker";

interface AddPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddPaymentModal({ isOpen, onClose }: AddPaymentModalProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Guardando tarjeta:", { cardNumber, cardName, expiry, cvc });
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B10]/80 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-md border border-[#1C1D24] bg-[#0E0E13] p-8 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-[#5C5D66] transition-colors hover:text-[#F3F1EA] focus:outline-none"
        >
          ✕
        </button>

        <div className="mb-6 text-center">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#34D399]">
            NUEVO COMPUESTO
          </span>
          <h2 className="font-display mt-2 text-2xl font-900 tracking-tight text-[#F3F1EA]">
            Agregar método de pago
          </h2>
          <p className="mt-2 text-sm text-[#93949F]">
            Ingresá los datos de tu tarjeta para habilitar compras rápidas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
              Número de Tarjeta
            </label>
            <input
              type="text"
              required
              maxLength={19}
              placeholder="0000 0000 0000 0000"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full rounded-sm border border-[#33343D] bg-[#131318] px-4 py-3 text-sm text-[#F3F1EA] placeholder-[#5C5D66] outline-none transition-colors focus:border-[#E10600]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
              Nombre en la Tarjeta
            </label>
            <input
              type="text"
              required
              placeholder="Ayrton Senna"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-full rounded-sm border border-[#33343D] bg-[#131318] px-4 py-3 text-sm text-[#F3F1EA] placeholder-[#5C5D66] outline-none transition-colors focus:border-[#E10600]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                Vencimiento
              </label>
              <input
                type="text"
                required
                maxLength={5}
                placeholder="MM/AA"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full rounded-sm border border-[#33343D] bg-[#131318] px-4 py-3 text-sm text-[#F3F1EA] placeholder-[#5C5D66] outline-none transition-colors focus:border-[#E10600]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                CVC
              </label>
              <input
                type="text"
                required
                maxLength={4}
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full rounded-sm border border-[#33343D] bg-[#131318] px-4 py-3 text-sm text-[#F3F1EA] placeholder-[#5C5D66] outline-none transition-colors focus:border-[#E10600]"
              />
            </div>
          </div>

          <ButtonChecker type="submit" className="mt-4 w-full py-3.5" showArrow={true}>
            Guardar en Billetera
          </ButtonChecker>
        </form>
      </div>
    </div>
  );
}