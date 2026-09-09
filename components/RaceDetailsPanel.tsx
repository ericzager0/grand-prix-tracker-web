import React from "react";
import StatBox from "./StatBox";

interface RaceDetailsPanelProps {
  blurb: string;
}

export default function RaceDetailsPanel({ blurb }: RaceDetailsPanelProps) {
  return (
    <div className="flex-grow rounded-md border border-[#1C1D24] bg-[#0E0E13] p-8 shadow-xl">
      <h2 className="font-display mb-6 text-3xl font-900 tracking-tight text-[#F3F1EA]">
        Detalles del Circuito
      </h2>
      <p className="mb-8 text-[#D8D7CE] leading-relaxed">
        {blurb} Prepárate para vivir una experiencia inolvidable en uno de los trazados más emocionantes del calendario.
      </p>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        <StatBox label="Longitud" value="5.412" unit="km" />
        <StatBox label="Vueltas" value="57" />
        <StatBox label="Capacidad" value="120k+" />
        <StatBox label="Récord de Pista" value="1:28.997" />
        <StatBox label="Vel. Máxima" value="340" unit="km/h" />
        <StatBox label="Máx. Ganador" value="L. Hamilton" />
      </div>
    </div>
  );
}

