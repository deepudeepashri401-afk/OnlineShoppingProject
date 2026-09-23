import { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "CUSTOMER" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setMessage("Registration successful. Please login.");
      setTimeout(() => navigate("/login"), 700);
    } catch {
      setMessage("Backend is not available. You can still continue with the frontend demo.");
    }
  };

  return (
    <form className="form-card" onSubmit={submit}>
      <h2>Create Account</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={change} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={change} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={change} required />
      <select name="role" value={form.role} onChange={change}>
        <option value="CUSTOMER">Customer</option>
        <option value="SELLER">Seller</option>
      </select>
      <button className="button">Register</button>
      {message && <p className="notice">{message}</p>}
    </form>
  );
}