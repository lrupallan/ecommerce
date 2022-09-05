import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {products} from '../../mock/products';
import Counter from '../Counter/Counter';
import estilos from '../ItemDetailContainer/itemDetailContainer.module.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  
   useEffect(() => {
    const getProduct = new Promise((res, rej)=> {
      const product = products.find((producto) => producto.id === 2)

      setTimeout(() => {
        res(product);
      }, 2000);
    });
  
    getProduct
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Finally');
      });
    
  }, []);
  return (
    <div className={estilos.mainContainer}>
      <ItemDetail key={item.id} item={item}/>
      <Counter stock={35}/>
    </div>
  )
}

export default ItemDetailContainer