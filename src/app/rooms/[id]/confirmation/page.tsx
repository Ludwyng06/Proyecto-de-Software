"use client";
import { useParams, useRouter } from "next/navigation";

export default function ReservationConfirmationPage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <main className="max-w-md mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">¡Reserva confirmada!</h1>
      <p className="mb-6">Tu reserva para la habitación <b>#{id}</b> ha sido registrada exitosamente.</p>
      <p className="mb-8">En breve recibirás un correo con los detalles de tu reserva.</p>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => router.push("/rooms")}
      >
        Volver a habitaciones
      </button>
    </main>
  );
} 