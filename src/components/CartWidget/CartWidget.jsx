import {AiOutlineShoppingCart} from 'react-icons/ai';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';





const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);
  return (
    <div style={{ display: 'flex'}}>
      <AiOutlineShoppingCart size={40} />
      <span>{totalQuantity() === 0 ? '' : totalQuantity()}</span>

    </div>
  )
}

export default CartWidget