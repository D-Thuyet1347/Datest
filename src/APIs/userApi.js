import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:4000/api";

const user = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" }
});

// API đăng ký
export const registerUser = async (data) => {
  try {
    const response = await user.post("/user/register", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Lỗi khi đăng ký tài khoản" };
  }
};

// API đăng nhập
export const loginUser = async (data) => {
  try {
    const response = await user.post("/user/login", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Lỗi khi đăng nhập" };
  }
};

// API lấy thông tin user theo ID
export const getUser = async (userId) => {
  try {
    const response = await user.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Không tìm thấy người dùng" };
  }
};
