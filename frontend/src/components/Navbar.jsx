import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { count } = useCart();

  return (
    <nav className="navbar">
      <Link className="brand" to="/">ShopEasy</Link>
      <div className="nav-links">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({count})</Link>
        {user && <Link to="/orders">Orders</Link>}
        {user?.role === "SELLER" && <Link to="/seller">Seller</Link>}
        {user ? (
          <button className="link-button" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}