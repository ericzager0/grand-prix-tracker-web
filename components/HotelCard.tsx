import React from "react";
import Image from "next/image";
import ButtonChecker from "./ButtonChecker";

interface HotelCardProps {
  id_hotel: string;
  nombre: string;
  estrellas: number;
  distancia_circuito_km: number;
  ofrece_traslado: boolean;
  precio_por_noche_usd: number;
  imagen_principal_url: string;
  tipo: string;
}

export default function HotelCard({
  nombre,
  estrellas,
  distancia_circuito_km,
  ofrece_traslado,
  precio_por_noche_usd,
  imagen_principal_url,
  tipo,
}: HotelCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-[#1C1D24] bg-[#0E0E13] transition-all hover:border-[#33343D] hover:shadow-lg sm:flex-row">
      <div className="relative h-48 w-full shrink-0 sm:h-auto sm:w-64">
        {imagen_principal_url ? (
          <Image
            src={imagen_principal_url}
            alt={nombre}
            fill
            className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#131318]">
            <span className="font-mono text-xs text-[#5C5D66]">Sin imagen</span>
          </div>
        )}

        {ofrece_traslado && (
          <div className="absolute left-3 top-3 rounded-sm bg-[#E10600] px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
            Traslado Incluido
          </div>
        )}
      </div>

      {/* Hotel Info */}
      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-[#F3F1EA]">
                {nombre}
              </h3>
              <div className="mt-1 flex text-[#E7B33C]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < estrellas ? "currentColor" : "none"}
                    stroke="currentColor"
                    className={`h-4 w-4 ${i >= estrellas ? "text-[#33343D]" : ""}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.148.621-.531 1.115-1.07.822L12 18.064a.562.562 0 00-.533 0l-4.78 2.688c-.539.303-1.218-.191-1.07-.822l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-right">
              <span className="font-mono text-[10px] uppercase text-[#93949F]">
                Desde
              </span>
              <div className="font-display text-2xl font-900 text-[#E10600]">
                ${precio_por_noche_usd}
              </div>
              <span className="font-mono text-[10px] text-[#5C5D66]">
                / noche
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-[#93949F]">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-[#7C4DFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>A {distancia_circuito_km} km del circuito</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-[#7C4DFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>{tipo}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <ButtonChecker className="px-6 py-2.5 text-xs">
            Seleccionar
          </ButtonChecker>
        </div>
      </div>
    </div>
  );
}
