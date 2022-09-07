import React, {useState} from 'react';
import estilos from './counter.module.css';

const Counter = ({stock}) => {
  

  const [count, setCount] = useState(0);


  const sumar = () => {
    count < stock ? setCount(count + 1) : alert("Alcanzaste el máximo");
  };

  const restar = () => {
    setCount(count - 1)
  }

  return (
    <div className={estilos.contenedorMain}>
      <div className={estilos.contenedorSecundario}>
      <button className={estilos.botonContador} onClick={restar} disabled={count === 0}>-</button>
      <p className={estilos.cantidad}>Count: {count}</p>
      <button className={estilos.botonContador} onClick={sumar}>+</button>
      </div>
      <button className={estilos.botonCarrito} disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default Counter;