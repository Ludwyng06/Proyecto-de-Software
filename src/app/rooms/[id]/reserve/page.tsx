"use client";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
// import { createReservation } from "@/app/services/reservationService";
// import { Room } from "@/app/types/room";

type FormData = {
  checkIn: string;
  checkOut: string;
  name: string;
  email: string;
  phone: string;
};

export default function ReserveRoomPage() {
  const { id } = useParams();
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  // const [room, setRoom] = useState<Room | null>(null);
  // useEffect(() => { getRoomById(id).then(setRoom); }, [id]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    // Aquí iría la llamada a la API para crear la reserva
    // await createReservation({ ...data, roomId: id });
    setTimeout(() => {
      setLoading(false);
      router.push(`/rooms/${id}/confirmation`);
    }, 1200);
  };

  return (
    <main className="max-w-lg mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Reservar habitación</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Fecha de entrada</label>
          <input type="date" {...register("checkIn", { required: true })} className="input input-bordered w-full" />
          {errors.checkIn && <span className="text-red-500 text-xs">Obligatorio</span>}
        </div>
        <div>
          <label className="block mb-1">Fecha de salida</label>
          <input type="date" {...register("checkOut", { required: true })} className="input input-bordered w-full" />
          {errors.checkOut && <span className="text-red-500 text-xs">Obligatorio</span>}
        </div>
        <div>
          <label className="block mb-1">Nombre completo</label>
          <input type="text" {...register("name", { required: true })} className="input input-bordered w-full" />
          {errors.name && <span className="text-red-500 text-xs">Obligatorio</span>}
        </div>
        <div>
          <label className="block mb-1">Correo electrónico</label>
          <input type="email" {...register("email", { required: true })} className="input input-bordered w-full" />
          {errors.email && <span className="text-red-500 text-xs">Obligatorio</span>}
        </div>
        <div>
          <label className="block mb-1">Teléfono</label>
          <input type="tel" {...register("phone", { required: true })} className="input input-bordered w-full" />
          {errors.phone && <span className="text-red-500 text-xs">Obligatorio</span>}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Procesando..." : "Confirmar reserva"}
        </button>
      </form>
    </main>
  );
} 