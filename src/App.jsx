import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [view, setView] = useState("register"); // Cambiar entre "register" y "login"

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button onClick={() => setView("register")}>Ir a Registro</button>
        <button onClick={() => setView("login")}>Ir a Login</button>
      </div>
      {view === "register" ? <RegisterPage /> : <LoginPage />}
      <Footer />
    </div>
  );
};

export default App;
