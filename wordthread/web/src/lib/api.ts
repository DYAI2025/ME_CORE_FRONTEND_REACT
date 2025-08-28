import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '/api',
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
  },
);

export const setToken = (token: string) => {
  localStorage.setItem('jwt', token);
};

export const clearToken = () => {
  localStorage.removeItem('jwt');
};

export const startAnalysis = async (payload: { text: string }) => {
  const { data } = await apiClient.post('/analysis/run', payload);
  return data;
};

export const getTimeline = async (runId: string) => {
  const { data } = await apiClient.get(`/analysis/timeline?run_id=${runId}`);
  return data;
};

export const getInsights = async (runId: string) => {
  const { data } = await apiClient.get(`/analysis/insights?run_id=${runId}`);
  return data;
};

export const getCooccurrence = async (runId: string) => {
  const { data } = await apiClient.get(`/analysis/cooccurrence?run_id=${runId}`);
  return data;
};

export const getHeatmap = async (runId: string) => {
  const { data } = await apiClient.get(`/analysis/heatmap?run_id=${runId}`);
  return data;
};

export const login = async (payload: { username: string; password: string }) => {
  const { data } = await apiClient.post('/auth/login', payload);
  return data;
};

export const register = async (payload: {
  username: string;
  password: string;
  email?: string;
}) => {
  const { data } = await apiClient.post('/auth/register', payload);
  return data;
};

// Add other API methods as needed...

export default apiClient;
