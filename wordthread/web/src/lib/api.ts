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

export const startAnalysis = async (payload: any) => {
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

// Add other API methods as needed...

export default apiClient;
