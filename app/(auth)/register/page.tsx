"use client";

import React, { useState } from "react";
import Home from "@/components/Home"; 
import EmailInput from "@/components/EmailInput"; 
import PasswordInput from "@/components/PasswordInput"; 
import ButtonChecker from "@/components/ButtonChecker"; 
import PasswordRequirements from "@/utils/passwordRequirements";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { requirements, score, getLightColor } = PasswordRequirements({ password });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (score < 4) return; 
    console.log("Register intent:", { name, email, password });
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0B0B10] px-6 py-12 text-[#F3F1EA] selection:bg-[#E10600] selection:text-white">
      <div className="gpt-carbon pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E10600]/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-sm">
        
        <div className="mb-10 flex justify-center">
          <Home isLarge={true} /> 
        </div>

        <div className="rounded-md border border-[#1C1D24] bg-[#0E0E13] p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#7C4DFF]">
              NUEVA INCORPORACIÓN
            </span>
            <h1 className="font-display mt-2 text-2xl font-900 tracking-tight">
              Asegurá tu butaca
            </h1>
            <p className="mt-2 text-sm text-[#93949F]">
              Completá tus datos para unirte a la grilla.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Nombre */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                Nombre completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ayrton Senna"
                className="w-full rounded-sm border border-[#33343D] bg-[#131318] px-4 py-3.5 text-sm text-[#F3F1EA] placeholder-[#5C5D66] outline-none transition-colors focus:border-[#E10600]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                Correo electrónico
              </label>
              <EmailInput 
                email={email} 
                setEmail={setEmail} 
                placeholder="piloto@escuderia.com" 
              /> 
            </div>

            {/* Contraseña + Telemetría */}
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                Contraseña
              </label>
              <PasswordInput 
                value={password} 
                onChange={setPassword} 
                placeholder="Creá una clave fuerte"
              /> 
              
              {/* --- Dashboard de Seguridad --- */}
              <div className="mt-2 rounded-sm border border-[#1C1D24] bg-[#0B0B10] p-3">
                <div className="mb-3 flex justify-between gap-1">
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className={`h-1.5 w-full rounded-full transition-all duration-300 ${getLightColor(index)}`}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-y-2">
                  {requirements.map((req) => (
                    <div key={req.id} className="flex items-center gap-1.5">
                      <div className={`h-1.5 w-1.5 rounded-full ${req.met ? 'bg-[#7C4DFF]' : 'bg-[#33343D]'}`} />
                      <span className={`font-mono text-[9px] uppercase tracking-wider transition-colors ${req.met ? 'text-[#F3F1EA]' : 'text-[#5C5D66]'}`}>
                        {req.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ButtonChecker 
              type="submit" 
              className={`mt-4 w-full py-3.5 ${score < 4 ? "opacity-50 grayscale" : ""}`} 
              showArrow={true}
            >
              Confirmar registro
            </ButtonChecker> 
          </form>

          <div className="mt-8 border-t border-[#1C1D24] pt-6 text-center text-sm text-[#93949F]">
            ¿Ya sos parte del equipo?{" "}
            <a href="/login" className="font-semibold text-[#F3F1EA] transition-colors hover:text-[#E10600]">
              Entrá al box
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}