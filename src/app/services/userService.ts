import API from './api';

export const userService = {
  getProfile: async () => {
    const response = await API.get('/users/profile');
    return response.data;
  },

  updateProfile: async (profileData: any) => {
    const response = await API.put('/users/profile', profileData);
    return response.data;
  },
};
