import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '250px', textAlign: 'center' }}>
      <img src={img} alt={name} style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p>Ingredientes: {ingredients.join(', ')}</p>
      <p><strong>${price.toLocaleString()}</strong></p>
      <button>Ver más</button>
      <button>Añadir</button>
    </div>
  );
};

export default CardPizza;
