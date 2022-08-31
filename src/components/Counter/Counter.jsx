import React, {useState} from 'react';
import estilos from './counter.module.css';

const Counter = () => {
  

  const [count, setCount] = useState(0);


  const sumar = () => {
    count < 10? setCount(count + 1) : alert("Alcanzaste el máximo");
  };

  const restar = () => {
    setCount(count - 1)
  }

  return (
    <div className={estilos.contenedorMain}>
      <div className={estilos.contenedorSecundario}>
      <button className={estilos.botonContador} onClick={restar} disabled={count === 0}>-</button>
      <p>Count: {count}</p>
      <button className={estilos.botonContador} onClick={sumar}>+</button>
      </div>
      <button className={estilos.botonCarrito} disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default Counter;