import "./App.css";
import { useState, useEffect } from "react";
import { UserContext } from "./Contexts/UserContext.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./Protected/ProtectedRoute.js";
import Login from "./User/Login.jsx";
import PageCrypto from "./Page/PageCrypto/Crypto.jsx";
import NoMatch from "./Page/NoMatch/NoMatch.jsx";
import axios from "axios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/security/user-is-auth", {
          headers: {
            "x-access-token": token,
          },
        })
        .then(({ data }) => {
          if (data.auth) {
            setIsAuthenticated(true);
            setUser(JSON.parse(localStorage.getItem("user")));
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="user" element={<ProtectedRoute />}>
            <Route path="crypto" element={<PageCrypto />} />
          </Route>
          <Route path="/404" element={<NoMatch />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
