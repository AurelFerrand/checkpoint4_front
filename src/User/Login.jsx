import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const url = "http://localhost:5000/security/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email: email, password: password };
      axios.post(url, user).then(({ data }) => {
        if (data.error) setError(data.error);
        else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/user";
        }
      });
    } else {
      setError("Veuillez entrez l'email et le mot de passe");
    }
  };

  return (
    <div className="Login">
      <h1>Login Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">
          Se Connecter
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
