import { defineStore } from 'pinia';
import axiosInstance from '@/services/http';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
  }),
  actions: {
    async login(credentials) {
      const { data } = await axiosInstance.post('/authenticate', credentials);
      this.token = data.token;
      this.user = data.user;
      localStorage.setItem('token', data.token);
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    },
    async checkToken() {
      if (!this.token) return false;
      try {
        const { data } = await axiosInstance.get('/usuario', {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = data.user;
        return true;
      } catch {
        return false;
      }
    },
  },
});
