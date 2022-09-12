import React from 'react';
import estilos from '../Item/item.module.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <div key={item.id} className={estilos.mainContainer}>
      <Link className={estilos.card} to={`/detail/${item.id}`}>
        <img className={estilos.itemImage} src={item.img} alt="" />
        <p className={estilos.itemTitle}>{item.title}</p>
        <h5 className={estilos.itemPrice}>${item.price}</h5>
        <p className={estilos.itemStock}>stock: {item.stock}</p>
      </Link>
    </div>
  )
}

export default Item;