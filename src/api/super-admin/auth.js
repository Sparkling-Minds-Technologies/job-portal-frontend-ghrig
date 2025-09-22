import api from "../../lib/axios";

export const login = async (data) => {
  console.log("Login API call with data:", data);
  console.log("API base URL:", api.defaults.baseURL);
  console.log(
    "Full URL:",
    `${api.defaults.baseURL}/api/v1/admin-management/login`
  );

  try {
    const response = await api.post("/api/v1/admin-management/login", data);
    console.log("Login API response:", response);
    return response.data;
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};
