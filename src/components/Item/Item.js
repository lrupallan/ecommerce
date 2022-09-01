import React from 'react';
import estilos from '../Item/item.module.css'

const Item = ({item}) => {
  return (
    <div key={item.id} className={estilos.mainContainer}>
      <p className={estilos.itemTitle}>{item.title}</p>
      <h5 className={estilos.itemPrice}>${item.price}</h5>
      <img className={estilos.itemImage} src={item.img} alt="" />
      <p className={estilos.itemStock}>stock: {item.stock}</p>
    </div>
  )
}

export default Item;