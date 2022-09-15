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

  return (
    <CartContext.Provider value={{cart, addToCart, clearCart, eliminarProd}}>
      {children}
    </CartContext.Provider>
    );
    
};

export default CartProvider;