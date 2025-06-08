import API from './api';

export const reservationService = {
  createReservation: async (reservationData: any) => {
    const allowedFields = [
      'roomId', 'checkInDate', 'checkOutDate', 'totalPrice', 'status', 'specialRequests', 'serviceIds', 'userId'
    ];
    const filteredData: any = {};
    for (const key of allowedFields) {
      if (reservationData[key] !== undefined) filteredData[key] = reservationData[key];
    }
    const response = await API.post('/reservations', filteredData);
    return response.data;
  },

  getReservationById: async (id: number) => {
    const response = await API.get(`/reservations/${id}`);
    return response.data;
  },

  getUserReservations: async () => {
    const response = await API.get('/reservations/user');
    return response.data;
  },

  cancelReservation: async (id: number) => {
    const response = await API.delete(`/reservations/${id}`);
    return response.data;
  },

  updateReservation: async (id: number, updateData: any) => {
    // Solo enviar los campos requeridos por el backend
    const allowedFields = [
      'checkInDate', 'checkOutDate', 'totalPrice', 'status', 'specialRequests', 'roomId', 'serviceIds'
    ];
    const filteredData: any = {};
    for (const key of allowedFields) {
      if (updateData[key] !== undefined) filteredData[key] = updateData[key];
    }
    const response = await API.put(`/reservations/${id}`, filteredData);
    return response.data;
  },
}; 