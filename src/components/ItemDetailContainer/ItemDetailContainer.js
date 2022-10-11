import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
// import {products} from '../../mock/products';
import estilos from '../ItemDetailContainer/itemDetailContainer.module.css';
import { useParams } from 'react-router-dom';
import {db} from '../../firebaseConfig';
import {getDoc, doc, collection} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {idProd} = useParams();
  
   useEffect(() => {
    const itemCollection = collection(db, 'productos');
    const ref = doc(itemCollection, idProd);
    getDoc(ref)
    .then((resp)=> {
      setItem({
        id: resp.id,
        ...resp.data()
      });
    });
    
  }, [idProd]);
  return (
    <div className={estilos.mainContainer}>
      <ItemDetail key={item.idProd} item={item}/>
    </div>
  )
}

export default ItemDetailContainer