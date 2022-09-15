import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
// import Form from '../Form/Form';

const Cart = () => {
  const {cart, clearCart, eliminarProd} = useContext(CartContext);
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {cart.map((prod)=> (
        <div key={prod.id}>
          <h2>{prod.title}</h2>
          <p>{prod.cantidad}</p>
          <button onClick={()=> eliminarProd(prod.id)}>Eliminar producto</button>
        </div>
      ))}
      {/* <Form /> */}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart;