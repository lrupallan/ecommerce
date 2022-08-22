import estilos from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';

const Navbar = () => {
  return (
    
          <nav className={estilos.contenedorMain}>
            <ul>
              <li>
                <a href='https://google.com'>Productos</a>
              </li>
              <li>
                <a href='https://google.com'>Nosotros</a>
              </li>
              <li>
                <a href='https://google.com'>Contacto</a>
              </li>
            </ul>
            <CartWidget/>
          </nav>
        
  )
}

export default Navbar