import React from 'react';
import estilos from'./main.module.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
// import Button from '../Button/Button';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';


const Main = (props) => {
  
  return (
    <main className={estilos.contenedorMain}>
        <Routes>
          <Route 
          path="/" 
          element={<ItemListContainer saludo='Bienvenidos al centro de donaciones para perros y gatos rescatados&#128054;&#128049;&#128150;'/>}
          />
          <Route
          path="/category/:categoryName"
          element={<ItemListContainer/>} />
          <Route path="/detail/:idProd" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Button value='Log out' variant='secondary'/> */}
          </Routes>
      </main>
  )
}

export default Main