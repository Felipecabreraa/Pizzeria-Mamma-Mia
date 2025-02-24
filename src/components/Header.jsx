import React from 'react';
import backgroundImage from '../assets/Header.jpg'; // Asegúrate de que la imagen está en esta ruta

const Header = () => {
  return (
    <header style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '300px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
      padding: '20px'
    }}>
      <h1>Pizzería Mamma Mía</h1>
      <p>Las mejores pizzas, con ingredientes frescos y deliciosos.</p>
    </header>
  );
};

export default Header;
