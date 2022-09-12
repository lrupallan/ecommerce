import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {products} from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import estilos from '../ItemListContainer/itemListContainer.module.css';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const {categoryName} = useParams();
  
   useEffect(() => {
      const getProducts = () =>
       new Promise((res, rej)=> {
        const prodFiltrados = products.filter(
          (prod) => prod.category === categoryName);
          
        setTimeout(() => {
          res(categoryName ? prodFiltrados : products);
        }, 500);
      });
    
      getProducts()
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        });
    
  }, [categoryName]);
  
  return (
    <div>
      <h2 className={estilos.saludo}>{props.saludo}</h2>
      <ItemList items={items}/>
      
    </div>
  )
}

export default ItemListContainer;