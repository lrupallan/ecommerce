import React from 'react';
import estilos from'./main.module.css';

const Main = (props) => {
  console.log(props);
  return (
    <main className={estilos.contenedorMain}>
        <section>
          <h2>
             Bienvenido!
          </h2>
          <h3>{props.test}</h3>
        </section>
        
      </main>
  )
}

export default Main