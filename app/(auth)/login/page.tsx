"use client";

import React, { useState } from "react";
import Home from "@/components/Home"; 
import EmailInput from "@/components/EmailInput"; 
import PasswordInput from "@/components/PasswordInput"; 
import ButtonChecker from "@/components/ButtonChecker"; 
import ForgotPasswordModal from "@/components/ForgotPasswordModal";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login intent:", { email, password });
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0B0B10] px-6 text-[#F3F1EA] selection:bg-[#E10600] selection:text-white">
      <div className="gpt-carbon pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E10600]/10 blur-[120px]" />
      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-10 flex justify-center">
          <Home isLarge={true} /> 
        </div>

        <div className="rounded-md border border-[#1C1D24] bg-[#0E0E13] p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#7C4DFF]">
              ACCESO AL PADDOCK
            </span>
            <h1 className="font-display mt-2 text-2xl font-900 tracking-tight">
              Iniciar sesión
            </h1>
            <p className="mt-2 text-sm text-[#93949F]">
              Ingresá tus credenciales para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#5C5D66]">
                  Contraseña
                </label>
                <a className="text-xs text-[#93949F] transition-colors hover:text-[#F3F1EA] cursor-pointer" onClick={() => setModalOpen(true)}>
                  ¿Olvidaste tu clave?
                </a>
              </div>
              <PasswordInput 
                value={password} 
                onChange={setPassword} 
              /> 
            </div>

            <ButtonChecker 
              type="submit" 
              className="mt-4 w-full py-3.5" 
              showArrow={true}
            >
              Entrar al box
            </ButtonChecker> 
          </form>

          <div className="mt-8 border-t border-[#1C1D24] pt-6 text-center text-sm text-[#93949F]">
            ¿No tenés tu butaca asegurada?{" "}
            <a href="/register" className="font-semibold text-[#F3F1EA] transition-colors hover:text-[#E10600]">
              Registrate acá
            </a>
          </div>
        </div>
      </div>
      {modalOpen && ( <ForgotPasswordModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> )}
    </div>
  );
}