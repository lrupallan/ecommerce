import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import estilos from '../ItemDetail/itemDetail.module.css'

const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0)
  const onAdd = (arg) => {
    setCantidad(arg);
  }

  return (
    <div key={item.idProdNumerico} className={estilos.itemDetail}>
      <div className={estilos.containerSecundario}>
      <p className={estilos.itemTitle}>{item.title}</p>
      <img className={estilos.itemImage} src={item.img} alt="" />
      <h5 className={estilos.itemPrice}>${item.price}/módulo</h5>
      <p className={estilos.itemStock}>Stock: {item.stock}</p>
      </div>
      <div className={estilos.containerSecundario}>
      <p className={estilos.itemDescription}>Melkor fue encontrado por Paula detrás de una estacion de servicio muy deteriorado y con signos de que había sido atropellado. Al llevarlo a la veterinaria y ver que tenia una pata fracturada, encontraron también que estaba deshidratado y mal nutrido. <br/> El veterinario estima que debe tener entre 9 y 10 años, y que por su comportamiento, alguna vez tuvo dueños. <br/> Paula lo recibió en su casa como hogar transitorio hasta encontrar una familia que lo adopte, pero necesita colaboración para saldar la deuda que quedó en la veterinaria por la atención y las vacunas que le suministraron. <br/><br/> Con tu donacion de UN módulo ya estás ayudando a Paula para que pueda seguir asistiendo a otros animalitos que lo necesiten como Melkor.</p>
      {cantidad === 0 ? (
        <Counter stock={item.stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to='/cart' className={estilos.linkCarrito}>Ir al carrito</Link>
      )}
      </div>
    </div>
  )
}

export default ItemDetail;