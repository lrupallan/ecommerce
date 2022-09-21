import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import {products} from '../../mock/products';
import ItemList from '../ItemList/ItemList';
import estilos from '../ItemListContainer/itemListContainer.module.css';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../firebaseConfig';
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {categoryName} = useParams();
  
   useEffect(() => {
      const itemCollection = collection(db, "productos");

      const referencia = categoryName
       ? query(itemCollection, where('category', '==', categoryName))
       : itemCollection;

      getDocs(referencia)
      .then((resp)=> {
          const products = resp.docs.map((prod)=>{
            return {
              id: prod.id,
              ...prod.data(),
            };
          });
          setItems(products);
        })
        .catch((error)=>{
          console.log(error);
        })
        .finally(()=>{
          setIsLoading(false);
        });
    
  }, [categoryName]);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
      {isLoading ? (
         <ClipLoader 
         color='aquamarine' 
         size={150}/>
      ) : (
        <>
         <h2 style={{display: 'inline-block'}}className={estilos.saludo}>{props.saludo}</h2>
         <ItemList items={items}/>
        
        </>
      )}
      
    </div>
  )
}

// useEffect(() => {
//   const getProducts = () =>
//    new Promise((res, rej)=> {
//     const prodFiltrados = products.filter(
//       (prod) => prod.category === categoryName);
      
//     setTimeout(() => {
//       res(categoryName ? prodFiltrados : products);
//     }, 500);
//   });

//   getProducts()
//     .then((data) => {
//       setItems(data);
//       setIsLoading(false);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return () => {
//     setIsLoading(true);
//   };

// }, [categoryName]);

export default ItemListContainer;