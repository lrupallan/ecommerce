import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import estilos from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { useState } from "react";

const Navbar = (props) => {
  const [categories, setCategories] = useState([])

  useEffect(()=> {
    const collectionCat = collection(db, 'categorias')

    getDocs(collectionCat)
    .then((resp)=>{
      const categorias = 
      resp.docs.map((cat)=> {
        return {
          id: cat.id,
          ...cat.data()
        }
      })
      setCategories(categorias);
    })
  }, [])

  return (
    <nav className={props.isFooter ? estilos.nav : estilos.footer}>
      <Link to="/">37080</Link>
      <ul>
        {props.isFooter ? (
          <>
            {categories.map((cat) => (
              <NavLink key={cat.id} to={`/category/${cat.route}`}>
                {cat.name}
              </NavLink>
            ))}
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

// {/* <>
//             <Link to="/category/perros">Perro</Link>

//             <Link to="/category/gatos">Gato</Link>

//             <Link to="/category/viejitos">Viejitos</Link>
//           </> */}

export default Navbar;
