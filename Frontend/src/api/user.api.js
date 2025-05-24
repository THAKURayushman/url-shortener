import axiosInstance from "../utils/axiosInstance";

export const loginUser = async (password, email) => {
  const { data } = await axiosInstance.post("/api/auth/login", {
    email,
    password,
  });
  return data;
};

export const registerUser = async (name, password, email) => {
  const { data } = await axiosInstance.post("/api/auth/register", {
    name,
    email,
    password,
  });
  return data;
};

export const logoutUser = async () => {
  const { data } = await axiosInstance.get("/api/auth/logout");
  return data;
};

export const getCurrentUser = async () => {
  const res = await axiosInstance.get("/api/auth/me");

  // Confirm the response is actually JSON:
  if (res && res.data) {
    return res.data;
  } else {
    console.error("Invalid response from /api/auth/me:", res);
    throw new Error("Unexpected response from server");
  }
};

export const getAllUserUrls = async () => {
  const { data } = await axiosInstance.post("/api/user/urls");
  return data;
};
