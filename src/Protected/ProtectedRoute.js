import { Outlet, Navigate } from "react-router-dom";
import Game from "../Page/PageGame/Game.jsx";

export const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user && user.role === 1 ? (
    <div>
      <Game />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};
