"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
// import { getRoomById } from "@/app/services/roomService"; // Para integración futura
// import { Room } from "@/app/types/room";

// Tipos temporales (reemplazar por importación de types/room.ts)
type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  bedType: string;
  imageUrls: string[];
  amenities: string[];
};

const mockRoom: Room = {
  id: 1,
  name: "Suite Deluxe",
  description: "Habitación amplia con vista al mar, jacuzzi y balcón privado.",
  price: 250,
  capacity: 4,
  bedType: "King Size",
  imageUrls: [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg"
  ],
  amenities: ["WiFi", "Aire acondicionado", "TV Smart", "Minibar", "Caja fuerte"]
};

export default function RoomDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  // const [room, setRoom] = useState<Room | null>(null);
  // useEffect(() => {
  //   getRoomById(id).then(setRoom);
  // }, [id]);
  // Por ahora usamos mockRoom
  const room = mockRoom;

  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Galería de imágenes */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {room.imageUrls.map((url, idx) => (
              <Image
                key={idx}
                src={url}
                alt={`Imagen ${idx + 1} de ${room.name}`}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-40"
              />
            ))}
          </div>
        </div>
        {/* Detalles */}
        <div className="flex-1 space-y-4">
          <p className="text-lg">{room.description}</p>
          <div className="flex gap-4 text-sm">
            <span>Capacidad: <b>{room.capacity}</b></span>
            <span>Tipo de cama: <b>{room.bedType}</b></span>
          </div>
          <div className="mt-2">
            <span className="font-semibold">Amenidades:</span>
            <ul className="list-disc ml-6">
              {room.amenities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="text-2xl font-bold text-primary mt-4">
            ${room.price} / noche
          </div>
          <button
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => router.push(`/rooms/${room.id}/reserve`)}
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </main>
  );
} 