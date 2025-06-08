import API from './api';
import { Room } from "@/app/types/room";

export const roomService = {
  getAllRooms: async () => {
    const response = await API.get('/rooms');
    return response.data;
  },

  getRoomById: async (id: number) => {
    const response = await API.get(`/rooms/${id}`);
    return response.data;
  },

  searchRooms: async (params: any) => {
    const response = await API.get('/rooms/search', { params });
    return response.data;
  },

  checkAvailability: async (roomId: number, checkIn: string, checkOut: string) => {
    const response = await API.get('/rooms/availability', {
      params: { roomId, checkIn, checkOut },
    });
    return response.data;
  },

  getBookedDates: async (roomId: number) => {
    const response = await API.get(`/rooms/${roomId}/booked-dates`);
    return response.data;
  },
};

// Mock temporal, reemplazar por fetch real a la API
export async function getRoomById(id: string | number): Promise<Room> {
  // Aquí se haría la petición real, por ejemplo:
  // const res = await fetch(`/api/rooms/${id}`);
  // if (!res.ok) throw new Error('No se pudo obtener la habitación');
  // return await res.json();
  return {
    id: Number(id),
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
}
