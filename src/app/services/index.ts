import axios from 'axios';

// Configuración base de axios
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a las peticiones autenticadas
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Servicios de habitaciones
export { roomService } from './roomService';

// Servicios de reservas
export const reservationService = {
  createReservation: async (reservationData: any) => {
    try {
      // Filtrar solo los campos válidos para el backend
      const allowedFields = [
        'roomId', 'checkInDate', 'checkOutDate', 'totalPrice', 'status', 'specialRequests', 'serviceIds'
      ];
      const filteredData: any = {};
      for (const key of allowedFields) {
        if (reservationData[key] !== undefined) filteredData[key] = reservationData[key];
      }
      const response = await API.post('/reservations', filteredData);
      return response.data;
    } catch (error) {
      console.error('Error al crear reserva:', error);
      throw error;
    }
  },

  getReservationById: async (id: number) => {
    try {
      const response = await API.get(`/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener reserva ${id}:`, error);
      throw error;
    }
  },

  getUserReservations: async () => {
    try {
      const response = await API.get('/reservations/user');
      return response.data;
    } catch (error) {
      console.error('Error al obtener reservas del usuario:', error);
      throw error;
    }
  },

  cancelReservation: async (id: number) => {
    try {
      const response = await API.delete(`/reservations/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al cancelar reserva ${id}:`, error);
      throw error;
    }
  },
};

export default API;

export { userService } from './userService';
export { serviceService } from './serviceService';
export { paymentService } from './paymentService'; 