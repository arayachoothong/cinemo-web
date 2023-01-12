import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export function get(URL) {
  return axiosInstance.get(`/${URL}`).then((response) => response);
}

export function post(URL, payload) {
  return axiosInstance.post(`/${URL}`, payload).then((response) => response);
}

export function patch(URL, payload) {
  return axiosInstance.patch(`/${URL}`, payload).then((response) => response);
}

export function del(URL) {
  return axiosInstance.delete(`/${URL}`).then((response) => response);
}
