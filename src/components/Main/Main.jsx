import React from 'react';
import estilos from'./main.module.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CheckOut from '../checkOut/CheckOut';


const Main = (props) => {
  
  return (
    <main className={estilos.contenedorMain}>
        <Routes>
          <Route 
          path="/" 
          element={<ItemListContainer saludo='BIENVENIDO AL CENTRO DE DONACIONES PARA PERROS Y GATOS RESCATADOS&#128054;&#128049;'/>}
          />
          <Route
          path="/category/:categoryName"
          element={<ItemListContainer/>} />
          <Route path="/detail/:idProd" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />

          </Routes>
      </main>
  )
}

export default Main