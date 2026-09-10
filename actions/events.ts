/**
 * Re-export de servicios de eventos para consumo directo en el cliente.
 * (Sin server actions ni código de backend en Next.js)
 */
export { getEvents, getEventById } from "@/services/events";
export type { BackendEvent, ApiResponse } from "@/services/events";
