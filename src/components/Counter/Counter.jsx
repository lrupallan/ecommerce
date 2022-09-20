import React, {useState} from 'react';
import { useEffect } from 'react';
import estilos from './counter.module.css';

const Counter = ({stock, onAdd, initial = 1}) => {
  const [count, setCount] = useState(initial);

  useEffect(()=> {
    setCount(initial)
  }, [initial]);


  const sumar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1)
  };

  

  return (
    <div className={estilos.contenedorMain}>
      <div className={estilos.contenedorSecundario}>
      <button className={estilos.botonContador} onClick={restar} disabled={count === 0}>-</button>
      <p className={estilos.cantidad}>Módulos: {count}</p>
      <button className={estilos.botonContador} onClick={sumar}>+</button>
      </div>
      <button onClick={(() =>onAdd(count)) }className={estilos.botonCarrito} disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default Counter;