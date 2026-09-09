"use client";

import React, { use, useState, useEffect } from "react";
import { F1_CALENDAR_2026, Race } from "@/utils/races";
import { fetchEventByIdFromBackend } from "@/utils/events";
import { notFound } from "next/navigation";
import HotelCard from "@/components/HotelCard";
import HotelFilters from "@/components/HotelFilters";
import Eyebrow from "@/components/EyeBrow";

// Datos mockeados basados en la estructura relacional de la BD (hoteles + habitaciones_hotel)
const MOCK_HOTELS = [
  {
    id_hotel: "h1",
    id_ciudad: "c1",
    nombre: "Hotel de Paris Monte-Carlo",
    estrellas: 5,
    distancia_circuito_km: 1.2,
    ofrece_traslado: true,
    imagen_principal_url: "/races/monaco.jpg",
    habitaciones_hotel: [
      {
        id_habitacion: "hab1",
        id_hotel: "h1",
        tipo: "Suite Presidencial",
        precio_por_noche_usd: 1250,
        stock_disponible: 3,
      },
    ],
  },
  {
    id_hotel: "h2",
    id_ciudad: "c2",
    nombre: "Trackside Resort & Spa",
    estrellas: 4,
    distancia_circuito_km: 0.8,
    ofrece_traslado: true,
    imagen_principal_url: "/races/austin.jpg",
    habitaciones_hotel: [
      {
        id_habitacion: "hab2",
        id_hotel: "h2",
        tipo: "Habitación Doble Estándar",
        precio_por_noche_usd: 450,
        stock_disponible: 10,
      },
    ],
  },
  {
    id_hotel: "h3",
    id_ciudad: "c3",
    nombre: "F1 Racing Hostel Central",
    estrellas: 3,
    distancia_circuito_km: 15.5,
    ofrece_traslado: false,
    imagen_principal_url: "",
    habitaciones_hotel: [
      {
        id_habitacion: "hab3",
        id_hotel: "h3",
        tipo: "Cama en habitación compartida",
        precio_por_noche_usd: 85,
        stock_disponible: 25,
      },
    ],
  },
];

export default function HotelsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const mockRace = F1_CALENDAR_2026.find((r) => r.id === id);
  const [race, setRace] = useState<Race | null>(mockRace || null);
  const [isLoading, setIsLoading] = useState(!mockRace);

  const [priceRange, setPriceRange] = useState(1500);
  const [minStars, setMinStars] = useState(3);
  const [transferOnly, setTransferOnly] = useState(false);

  useEffect(() => {
    if (!mockRace) {
      let isMounted = true;
      fetchEventByIdFromBackend(id)
        .then((data) => {
          if (isMounted) {
            setRace(data);
            setIsLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) setIsLoading(false);
        });
      return () => {
        isMounted = false;
      };
    }
  }, [id, mockRace]);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-[#F3F1EA]">
        <span className="h-8 w-8 rounded-full border-2 border-[#E10600] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!race) {
    notFound();
  }

  const filteredHotels = MOCK_HOTELS.filter((h) => {
    const cheapestRoom = h.habitaciones_hotel?.[0];
    const price = cheapestRoom ? cheapestRoom.precio_por_noche_usd : 99999;

    return (
      price <= priceRange &&
      h.estrellas >= minStars &&
      (transferOnly ? h.ofrece_traslado : true)
    );
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 border-b border-[#1C1D24] pb-6">
        <Eyebrow>Reserva de Paquete</Eyebrow>
        <h1 className="font-display mt-2 text-4xl font-900 tracking-tight sm:text-5xl">
          Hotelería para {race.name.replace(" GP", "")}
        </h1>
        <p className="mt-4 text-[#93949F] max-w-2xl">
          Paso 1: Seleccioná el alojamiento para tu fin de semana de carrera.
          Tenemos opciones desde hostels a minutos del circuito hasta suites con
          vista a la pista.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <HotelFilters
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minStars={minStars}
          setMinStars={setMinStars}
          transferOnly={transferOnly}
          setTransferOnly={setTransferOnly}
        />

        {/* Columna Derecha: Lista de Hoteles */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => {
              const room = hotel.habitaciones_hotel?.[0];
              return (
                <HotelCard
                  key={hotel.id_hotel}
                  id_hotel={hotel.id_hotel}
                  nombre={hotel.nombre}
                  estrellas={hotel.estrellas}
                  distancia_circuito_km={hotel.distancia_circuito_km}
                  ofrece_traslado={hotel.ofrece_traslado}
                  precio_por_noche_usd={room?.precio_por_noche_usd || 0}
                  tipo={room?.tipo || "Sin habitaciones"}
                  imagen_principal_url={hotel.imagen_principal_url}
                />
              );
            })
          ) : (
            <div className="relative flex h-64 flex-col items-center justify-center overflow-hidden rounded-md border border-dashed border-[#33343D] bg-[#0E0E13]">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale"
                style={{ backgroundImage: "url('/mclaren_roto.png')" }}
              />
              <div className="relative z-10 flex flex-col items-center text-center px-4">
                <p className="mt-4 font-mono text-sm tracking-widest text-[#ffffff] uppercase">
                  No hay hoteles que coincidan
                </p>
                <button
                  onClick={() => {
                    setPriceRange(2000);
                    setMinStars(3);
                    setTransferOnly(false);
                  }}
                  className="mt-4 text-base font-bold text-[#f10b03] hover:underline cursor-pointer"
                >
                  Limpiar filtros
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
