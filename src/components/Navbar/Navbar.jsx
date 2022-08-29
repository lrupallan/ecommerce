import estilos from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import Button from '../Button/Button';

const Navbar = (props) => {

    if(props.isFooter) {
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
          <Button value='Sign in' variant='primary'/>
          <CartWidget/>
        </nav>
      );
    }else {
      return (
      
        <nav className={estilos.contenedorMain}>
          <ul>
            <li>
              <a href='https://google.com'>Twitter</a>
            </li>
            <li>
              <a href='https://google.com'>Instagram</a>
            </li>
            <li>
              <a href='https://google.com'>Facebook</a>
            </li>
          </ul>
        </nav>
      
    );
    };
    
  }


export default Navbar