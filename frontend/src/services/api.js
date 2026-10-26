import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api"
});

export const getProducts = () => api.get("/products");
export const getProduct = (id) => api.get(`/products/${id}`);
export const addProduct = (product) => api.post("/products", product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const registerUser = (user) =>
  api.post("/users/register", user);

export const loginUser = (email, password) =>
  api.post("/users/login", { email, password });

export const addToCart = (userId, productId, quantity) =>
  api.post("/cart/add", { userId, productId, quantity });

export const placeOrder = (userId, totalAmount) =>
  api.post("/orders/place", { userId, totalAmount });

export const getOrders = () => api.get("/orders");

export default api;