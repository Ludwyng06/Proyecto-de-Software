import API from './api';

export const serviceService = {
  getAllServices: async () => {
    const response = await API.get('/services');
    return response.data;
  },

  getServiceById: async (id: number) => {
    const response = await API.get(`/services/${id}`);
    return response.data;
  },

  bookService: async (serviceData: any) => {
    const response = await API.post('/services/book', serviceData);
    return response.data;
  },
}; 