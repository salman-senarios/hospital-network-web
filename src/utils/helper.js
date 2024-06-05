import { Axios } from "./axios";

export const convertBase64Image = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const apiRequest = async ({ type, path, body, params, config }) => {
  try {
    const res = await Axios[type](
      path,
      {
        ...(body && body),
        ...(params && { params }),
      },
      { ...config }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
