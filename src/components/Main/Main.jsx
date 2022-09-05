import React from 'react';
import estilos from'./main.module.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
// import Button from '../Button/Button';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const Main = (props) => {
  
  return (
    <main className={estilos.contenedorMain}>
        <section>
          <h3>{props.test}</h3>
          <ItemListContainer saludo='Bienvenidos al centro de donaciones para perros y gatos rescatados&#128054;&#128049;&#128150;'/>
          <ItemDetailContainer />
          {/* <Button value='Log out' variant='secondary'/> */}
        </section>
        
      </main>
  )
}

export default Main