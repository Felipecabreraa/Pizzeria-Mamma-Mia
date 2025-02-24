import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false; // Simula si el usuario está logueado o no

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa' }}>
      <a href="#">🍕 Home</a>
      {token ? (
        <>
          <button>🔓 Profile</button>
          <button>🔒 Logout</button>
        </>
      ) : (
        <>
          <button>🔐 Login</button>
          <button>🔐 Register</button>
        </>
      )}
      <button>🛒 Total: ${total.toLocaleString()}</button>
    </nav>
  );
};

export default Navbar;
