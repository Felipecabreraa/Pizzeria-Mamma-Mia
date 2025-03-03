import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Las contraseñas no coinciden.");
      return;
    }

    setMessage("✅ Registro exitoso 🎉");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Registro</h2>
      <form onSubmit={handleRegister} style={{ display: "inline-block", textAlign: "left" }}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <label>Confirmar Contraseña:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <br />
        <button type="submit">Registrarse</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default RegisterPage;
