import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {products} from '../../mock/products';
import estilos from '../ItemDetailContainer/itemDetailContainer.module.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {idProd} = useParams();
  const idProdNumerico = parseInt(idProd);
  
   useEffect(() => {
    const getProduct = () =>
     new Promise((res, rej)=> {
      const product = products.find((producto) => producto.id === idProdNumerico);

      setTimeout(() => {
        res(product);
      }, 500);
    });
  
    getProduct()
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Finally');
      });
    
  }, [idProdNumerico]);
  return (
    <div className={estilos.mainContainer}>
      <ItemDetail key={item.idProdNumerico} item={item}/>
    </div>
  )
}

export default ItemDetailContainer