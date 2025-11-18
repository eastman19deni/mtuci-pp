/*import axios from 'axios';

// Безопасное получение переменной окружения
const getApiBaseUrl = (): string => {
  // Для Create React App
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Для Vite или других сборщиков
  if (import.meta.env?.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Значение по умолчанию
  return 'http://localhost:3001/api';
};

const API_BASE_URL = getApiBaseUrl();

// Создаем экземпляр axios с настройками
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцептор для добавления токена к запросам
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Интерцептор для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Типы для TypeScript
export interface LoginData {
  username: string;
  password: string;
  userType: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: 'student' | 'staff' | 'admin';
  program?: string;
  studentId?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// API методы
export const authAPI = {
  login: async (loginData: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', loginData);
    return response.data;
  },

  logout: async (): Promise<void> => {
    const token = localStorage.getItem('authToken');
    if (token) {
      await api.post('/auth/logout');
    }
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  },

  verifyToken: async (): Promise<User> => {
    const response = await api.get<User>('/auth/verify');
    return response.data;
  },
};

export const userAPI = {
  getUserProfile: async (userId: string): Promise<User> => {
    const response = await api.get<User>(`/users/${userId}`);
    return response.data;
  },

  updateProfile: async (userId: string, userData: Partial<User>): Promise<User> => {
    const response = await api.put<User>(`/users/${userId}`, userData);
    return response.data;
  },
};

export default api;
*/