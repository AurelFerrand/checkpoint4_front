import { Outlet, Navigate } from "react-router-dom";
import Crypto from "../Page/PageCrypto/Crypto.jsx";

export const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && user.role === 1 ? (
    <div>
      <Crypto />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};
