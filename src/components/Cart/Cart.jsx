import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import estilos from '../Cart/cart.module.css';
import { Link } from "react-router-dom";


const Cart = () => {
  const {cart, clearCart, eliminarProd, totalPrice, totalQuantity} = useContext(CartContext);


  return (
    <div className={estilos.mainContainer}>
      {cart.map((prod)=> (
        <div key={prod.id} className={estilos.itemCartContainer}>
          <img className={estilos.cartImg} src={prod.img} alt="" />
          <h2>{prod.title}</h2>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio: ${prod.price}</p>
          <button className={estilos.deleteOne} onClick={()=> eliminarProd(prod.id)}>&#10060;Eliminar donacion</button>
        </div>
      ))}
      <div>
        {totalQuantity() === 0 
          ? <h3 className={estilos.mensajeCarritoVacio}>Todavia no hay donaciones en tu carrito, podés hacer tu donación <Link to="/"><u>ACÁ</u></Link></h3>
          : (
          <>

            <h4 className={estilos.totalCantidad}>Modulos totales: {totalQuantity()}</h4>
            <h4 className={estilos.totalCompra}>Total: ${totalPrice()}</h4>
            <div className={estilos.botones}>
            <button className={estilos.finalizarCompra}>
              <Link to='/checkout'>Finalizar donación</Link>
            </button>
            <button className={estilos.seguirComprando}><Link to='/'>Seguir mirando</Link></button>
            <button className={estilos.clearCart} onClick={clearCart}>Limpiar carrito</button>
            </div>
         </>
        )}
      </div>
    </div>
  )
}

export default Cart;