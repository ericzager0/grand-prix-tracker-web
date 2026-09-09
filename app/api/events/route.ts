import { NextResponse } from "next/server";

export async function GET() {
  try {
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
    const res = await fetch(`${backendUrl}/events`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: `Error del servidor backend: ${res.statusText}`,
          data: null,
        },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error al conectar con el backend de Spring:", error);
    return NextResponse.json(
      {
        success: false,
        message: "No se pudo conectar con el servicio de eventos en el backend",
        data: null,
      },
      { status: 502 },
    );
  }
}
