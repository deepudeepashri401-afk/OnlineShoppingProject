import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("CUSTOMER");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
  e.preventDefault();

  if (!email || !password) return;

  try {
    await login(email, password);

    const savedUser = JSON.parse(localStorage.getItem("user"));

    navigate(savedUser.role === "SELLER" ? "/seller" : "/");
  } catch (error) {
    alert("Invalid email or password");
  }
};

  return (
    <form className="form-card" onSubmit={submit}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {/* <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="CUSTOMER">Customer</option>
        <option value="SELLER">Seller</option>
      </select> */}
      <button className="button">Login</button>
    </form>
  );
}