import React from 'react'
import Form from '../Form/Form';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import estilos from '../Cart/cart.module.css';



const CheckOut = () => {
  const [idCompra, setIdCompra] = useState('');
  const {cart, clearCart, totalPrice} = useContext(CartContext);


  const total = totalPrice();
  const handleId = (id) => {
    setIdCompra(id)
  }
  if (idCompra) {
    return <h3>Muchas gracias por tu donación! Tu número de ticket es: {idCompra} <br /> <br /> <Link className={estilos.volver} to='/'>Volver al inicio</Link></h3>

  }

  return (
    <div>
      <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
    </div>
  )
}

export default CheckOut;