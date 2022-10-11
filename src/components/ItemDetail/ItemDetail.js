import React, {useState} from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Counter from '../Counter/Counter';
import estilos from '../ItemDetail/itemDetail.module.css'

const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0)
  const {addToCart, getProductQuantity} = useContext(CartContext);

  const onAdd = (cantidadItem) => {
    setCantidad(cantidadItem);
    addToCart(item, cantidadItem);
  };

  const quantity = getProductQuantity(item.id);

  return (
    <div key={item.idProdNumerico} className={estilos.itemDetail}>
      <div className={estilos.containerSecundario}>
      <p className={estilos.itemTitle}>{item.title}</p>
      <img className={estilos.itemImage} src={item.img} alt="" />
      <h5 className={estilos.itemPrice}>${item.price}/módulo</h5>
      <p className={estilos.itemStock}>Stock: {item.stock}</p>
      </div>
      <div className={estilos.containerSecundario}>
      <p className={estilos.itemDescription}>{item.description}</p>
      <p className={estilos.itemDescription}><em> <b>Con tu donación de UN módulo ya estás ayudando a que muchos animales que lo necesitan, como {item.title}, tengan una vida mejor.</b></em></p>
      {cantidad === 0 ? (
        <Counter 
        stock={item.stock} 
        initial={quantity} 
        onAdd={onAdd} />
      ) : (
        <Link to='/cart' className={estilos.linkCarrito}>Ir al carrito</Link>
      )}
      </div>
    </div>
  )
}

export default ItemDetail;