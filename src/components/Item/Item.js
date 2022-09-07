import React from 'react';
import estilos from '../Item/item.module.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
  return (
    <div key={item.id} className={estilos.mainContainer}>
      <p className={estilos.itemTitle}>{item.title}</p>
      <h5 className={estilos.itemPrice}>${item.price}</h5>
      <img className={estilos.itemImage} src={item.img} alt="" />
      <Link to={`/detail/${item.id}`}>
      <button className={estilos.itemButton}>Ver detalles</button>
        </Link>
      <p className={estilos.itemStock}>stock: {item.stock}</p>
    </div>
  )
}

export default Item;