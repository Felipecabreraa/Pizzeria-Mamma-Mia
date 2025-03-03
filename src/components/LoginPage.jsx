import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setMessage("✅ Inicio de sesión exitoso 🎉");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Ingresar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;
