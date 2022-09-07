import estilos from './navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    if(props.isFooter) {
      return (
      
        <nav className={estilos.contenedorMain}>
          <Link to="/">37080</Link>
          <ul>
            <Link to="/category/perros">Perro</Link>
            
            <Link to="/category/gatos">Gato</Link>
            
            <Link to="/category/viejitos">Viejitos</Link>
          </ul>
          
          <Link to="/cart">
            <CartWidget/>
          </Link>
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