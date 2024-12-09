import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/users'; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available (excluding /signup endpoint)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && !config.url.includes('/signup')) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (userData) => {
  try {
    const response = await api.post('/signup', userData); // API endpoint for registration
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
    try {
      const response = await api.post('/signin', credentials);
       return response;
     } catch (error) {
       throw error;
     }
   };
