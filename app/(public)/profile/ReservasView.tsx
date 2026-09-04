import React from "react";
import ReservationCard from "@/components/ReservationCard";
import { RESERVATION_DATA } from "@/utils/mockData/reservationData";

export default function ReservasView() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-2xl font-900 tracking-tight">Próximos Grandes Premios</h3>
      </div>

      {RESERVATION_DATA.map((reservation, index) => (
        <ReservationCard key={index} name={reservation.name} date={reservation.date} items={reservation.items} />
      ))}
    </div>
  );
}