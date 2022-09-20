import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({children})  => {
  const [cart, setCart] = useState([]);
  //estados
  //funciones

  const addToCart = (item, cantidad) => {
    if(isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    }else {
      setCart([...cart, {...item, cantidad}]);
    }
  };

  const totalPrice = () => {
    let acumulador = 0
    cart.forEach((prod)=>{
      acumulador += prod.price * prod.cantidad;
    });
    return acumulador;
  };

  const totalQuantity = () => {
    let acumuladorUnidades = 0
    cart.forEach((prod)=>{
      acumuladorUnidades +=  prod.cantidad;
    });
    return acumuladorUnidades;
  };

  const isInCart = (id) => {
    return cart.some((prod)=> prod.id === id)
  }

  const sumarCantidad = (item, cantidad) => {
    const carritoActualizado = cart.map((prod)=> 
      prod.id === item.id
      ?  {...prod, cantidad: prod.cantidad + cantidad}
      : prod
    );
    setCart(carritoActualizado);
  };

  const eliminarProd = (id) => {
    console.log(`Eliminando producto ${id}`)
    setCart(cart.filter((prod) => prod.id !== id));
  }

  const clearCart = () => {
    setCart([]);
  };

  const getProductQuantity = (id) => {
    const product = cart.find((prod)=> prod.id ===id);
    return product?.cantidad;
  }

  return (
    <CartContext.Provider 
    value={{
      cart, 
      addToCart, 
      clearCart, 
      eliminarProd,
      totalPrice,
      totalQuantity,
      getProductQuantity}}>
      {children}
    </CartContext.Provider>
    );
    
};

export default CartProvider;