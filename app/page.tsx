"use client";
/**
 * GrandPrix Tracker — Landing Page
 * ---------------------------------------------------------------
 *
 * PALETA F1:
 *   --carbon        #0B0B10   fondo base
 *   --carbon-2      #131318   paneles
 *   --asphalt       #1C1D24   bordes / cards
 *   --graphite      #33343D   bordes sutiles / divisores
 *   --off-white     #F3F1EA   texto primario sobre fondo oscuro
 *   --fog           #93949F   texto secundario
 *   --race-red      #E10600   acento primario (CTA, foco)
 *   --sector-purple #7C4DFF   acento secundario (dato técnico / "vuelta rápida")
 *   --flag-gold     #E7B33C   detalle premium, uso mínimo
 *
 * ---------------------------------------------------------------
 */

import React, { useState } from "react";
import { SERVICES, SERVICE_ICONS } from "../utils/services";
import { STEPS } from "@/utils/steps";
import { DESTINATIONS } from "@/utils/destinations";
import { SYSTEM_PANELS } from "@/utils/systemPanels";
import ButtonChecker from "../components/ButtonChecker";
import ButtonOutline from "../components/ButtonOutline";
import Navbar from "@/components/Navbar";
import CountdownBoxes from "@/components/CoutdownBoxes";
import RacesCarrousel from "@/components/RacesCarrousel";
import StepsCard from "@/components/StepsCard";
import StatusDot from "@/components/StatusDot";
import Eyebrow from "@/components/EyeBrow";
import ServicesCard from "@/components/ServicesCard";
import DestinationCard from "@/components/DestinationsCard";
import SystemPanelCard from "@/components/SystemPanelCard";
import EmailInput from "@/components/EmailInput";
import Footer from "@/components/Footer";

import Reveal from "@/utils/Reveal";

import useScrolled from "@/hooks/useScrolled";

/* ======== DATA =============== */
/* Aca irian futuros, igual en lo posible separlos en su respectiva carpeta (NO a la gilada)*/

/* ======= HOOKS =========== */
/* Aca irian futuros, igual en lo posible separlos en su respectiva carpeta (NO a la gilada)*/

/* ======= PÁGINA =========== */
export default function Page() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <div
      className={
        " bg-[#0B0B10] text-[#F3F1EA] antialiased selection:bg-[#E10600] selection:text-white"
      }
    >
      {/* ================= HEADER ================= */}
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* ================= Banner principal ================= */}
      <section
        id="inicio"
        className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="gpt-carbon pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#E10600]/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span
            className="gpt-streak absolute top-[20%] h-px w-1/3 bg-linear-to-r from-transparent via-[#F3F1EA]/70 to-transparent"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="gpt-streak absolute top-[45%] h-px w-1/4 bg-linear-to-r from-transparent via-[#E10600]/70 to-transparent"
            style={{ animationDelay: "1.4s" }}
          />
          <span
            className="gpt-streak absolute top-[68%] h-px w-1/5 bg-linear-to-r from-transparent via-[#7C4DFF]/60 to-transparent"
            style={{ animationDelay: "2.7s" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>Nombre preliminar del proyecto</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className={
                "font-display mt-5 max-w-4xl text-[13vw] font-900 leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
              }
            >
              Tu fin de semana de Gran Premio,{" "}
              <span className="text-[#E10600]">armado como un pit stop.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-[#B9B8B0]">
              Entradas, hotel y traslados en un solo paquete. GrandPrix Tracker
              cruza en segundos la oferta de hoteles, ticketeras y flotas de
              ómnibus para que armar el viaje a tu próximo Gran Premio te lleve
              minutos, no quince pestañas abiertas.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonChecker
                href="#lista-de-espera"
                className="px-6 py-3.5 shadow-[0_0_0_1px_rgba(225,6,0,0.4)]"
                showArrow={true}
              >
                Sumarme a la lista de espera
              </ButtonChecker>
              <ButtonOutline
                href="#como-funciona"
              >
                Ver cómo funciona
              </ButtonOutline>
            </div>
          </Reveal>

          {/* ---- Countdown / HUD de telemetría ---- */}
          <Reveal delay={320} className="mt-16">
            <div className="gpt-hud-grid relative overflow-hidden rounded-md border border-[#1C1D24] bg-[#131318]/80 p-6 md:p-8">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <StatusDot />
                    <span
                      className={
                        "font-mono" +
                        " text-[11px] tracking-[0.3em] text-[#93949F]"
                      }
                    >
                      EN VIVO · PRÓXIMA LARGADA
                    </span>
                  </div>
                  <p
                    className={
                     "font-display mt-2 text-xl font-700 md:text-2xl"
                    }
                  >
                    GP de Italia{" "}
                    <span className="text-[#93949F]">— Monza</span>
                  </p>
                </div>

                <CountdownBoxes />
              </div>
              <p
                className={"font-mono" + " mt-4 text-[10px] text-[#5C5D66]"}
              >
                * fecha ilustrativa mientras el proyecto está en desarrollo — se
                conecta al calendario oficial
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      
      <RacesCarrousel />

      {/* ================= CÓMO FUNCIONA ================= */}
      <section
        id="como-funciona"
        className="mx-auto max-w-7xl px-6 py-24 md:py-32"
      >
        <Reveal>
          <Eyebrow>Vuelta de formación</Eyebrow>
          <h2
            className={
              "font-display" +
              " mt-4 max-w-2xl text-3xl font-900 tracking-tight md:text-5xl"
            }
          >
            Tres pasos, un solo checkout.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-[#1C1D24] bg-[#1C1D24] md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 120} className="h-full">
              <StepsCard step={step} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section
        id="servicios"
        className="relative border-t border-[#1C1D24] bg-[#0E0E13] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>Todo en un box</Eyebrow>
            <h2
              className={
                "font-display" +
                " mt-4 max-w-2xl text-3xl font-900 tracking-tight md:text-5xl"
              }
            >
              Lo que coordinamos por vos.
            </h2>
          </Reveal>
          
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <Reveal key={service.title} delay={i * 120}>
                  <ServicesCard service={service} Icon={Icon} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALENDARIO / DESTINOS ================= */}
      <section
        id="calendario"
        className="mx-auto max-w-7xl px-6 py-24 md:py-32"
      >
        <Reveal>
          <Eyebrow>Próximas paradas</Eyebrow>
          <h2
            className={
              "font-display" +
              " mt-4 max-w-2xl text-3xl font-900 tracking-tight md:text-5xl"
            }
          >
            Elegí el circuito, nosotros el resto.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DESTINATIONS.map((dest, i) => (
            <Reveal key={dest.name} delay={i * 120}>
              <DestinationCard dest={dest} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= BAJO EL CAPÓ ================= */}
      <section
        id="bajo-el-capo"
        className="relative border-t border-[#1C1D24] bg-[#0E0E13] py-24 md:py-32"
      >
        <div className="gpt-hud-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <Eyebrow>Telemetría del sistema</Eyebrow>
            <h2
              className={
                "font-display" +
                " mt-4 max-w-2xl text-3xl font-900 tracking-tight md:text-5xl"
              }
            >
              Bajo el capó, tan preciso como un pit stop.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#93949F]">
              Cada reserva pasa por varios sistemas al mismo tiempo — hoteles,
              ticketeras, logística de ómnibus — sin que vos notes la costura.
              Así se ve el tablero, en criollo.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SYSTEM_PANELS.map((panel, i) => (
              <Reveal key={panel.tag} delay={i * 100}>
                <SystemPanelCard
                  tag={panel.tag}
                  title={panel.title}
                  status={panel.status}
                  body={panel.body}
                />
              </Reveal>
            ))}

            <Reveal
              delay={SYSTEM_PANELS.length * 100}
              className="lg:col-span-1"
            >
              <SystemPanelCard
                isClosing={true}
                title="ARQUITECTURA · EN DEFINICIÓN"
                body={
                  <>
                    Un patrón <span className="text-[#F3F1EA]">Facade</span>{" "}
                    orquesta hoteles y ticketeras durante el checkout. Evaluamos
                    sumar <span className="text-[#F3F1EA]">Strategy</span> para el
                    precio dinámico según la cercanía de la fecha de carrera.
                  </>
                }
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= LISTA DE ESPERA ================= */}
      <section
        id="lista-de-espera"
        className="relative overflow-hidden border-t border-[#1C1D24] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-[#7C4DFF]/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Eyebrow>Todavía en boxes</Eyebrow>
            <h2
              className={
                "font-display" +
                " mt-4 text-3xl font-900 tracking-tight md:text-5xl"
              }
            >
              Antes de la largada, sumate.
            </h2>
            <p className="mt-4 text-[#93949F]">
              GrandPrix Tracker está en construcción. Dejanos tu mail y sé de
              los primeros en armar tu paquete al circuito cuando abramos la
              pista.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            {submitted ? (
              <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-6 py-4 text-sm text-emerald-300">
                <span className="text-lg">🏁</span>
                ¡Anotado en la grilla! Te escribimos apenas larguemos.
              </div>
            ) : (
              <EmailInput 
                email={email}
                setEmail={setEmail}
                onSubmit={handleWaitlistSubmit}
                buttonText="Sumarme"
              />
            )}
            <p className="font-mono mt-4 text-[10px] tracking-[0.15em] text-[#5C5D66]">
              SIN SPAM · SOLO NOVEDADES DEL LANZAMIENTO
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
