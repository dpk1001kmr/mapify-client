import { api } from "../axios.config";
import { ENDPOINTS } from "../endpoints";

export const getData = async () => {
  const response = await api.get(ENDPOINTS.data);
  return response.data.data;
};

export const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await api.post(ENDPOINTS.upload, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteUpload = async () => {
  const response = await api.post(ENDPOINTS.deleteUpload);
  return response.data;
};

export const save = async (requestBody = {}) => {
  const response = await api.post(ENDPOINTS.save, requestBody);
  return response.data;
};
