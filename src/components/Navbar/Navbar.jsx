import estilos from "./navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={props.isFooter ? estilos.nav : estilos.footer}>
      <Link to="/">37080</Link>
      <ul>
        {props.isFooter ? (
          <>
            <Link to="/category/perros">Perro</Link>

            <Link to="/category/gatos">Gato</Link>

            <Link to="/category/viejitos">Viejitos</Link>
          </>
        ) : (
          "Footer"
        )}
      </ul>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};

export default Navbar;
