"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getEvents, getEventById, BackendEvent } from "@/services/events";
import { mapBackendEventToRace } from "@/utils/events";
import { Race } from "@/utils/races";

export function useEvents() {
  const query = useQuery<BackendEvent[]>({
    queryKey: ["events"],
    queryFn: getEvents,
    staleTime: Infinity,
    // Manejo robusto para el backend de Render (Free Tier despierta tras reposo)
    retry: 4,
    retryDelay: (attemptIndex) => Math.min(2000 * (attemptIndex + 1), 10000),
  });

  const events = useMemo(() => query.data ?? [], [query.data]);
  const races = useMemo<Race[]>(
    () => events.map(mapBackendEventToRace),
    [events],
  );

  return {
    ...query,
    events,
    races,
    isEmpty: !query.isPending && !events.length,
  };
}

export function useEvent(id: string | null | undefined) {
  const query = useQuery<BackendEvent | null>({
    queryKey: ["event", id],
    queryFn: () => (id ? getEventById(id) : null),
    enabled: Boolean(id),
    staleTime: Infinity,
    retry: 4,
    retryDelay: (attemptIndex) => Math.min(2000 * (attemptIndex + 1), 10000),
  });

  const event = query.data ?? null;
  const race = useMemo<Race | null>(
    () => (event ? mapBackendEventToRace(event) : null),
    [event],
  );

  return {
    ...query,
    event,
    race,
  };
}
