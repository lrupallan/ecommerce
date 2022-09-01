import React from 'react'
import Item from '../Item/Item';
import estilos from '../ItemList/list.module.css'

const ItemList = ({items}) => {
  
  return (
    <div className={estilos.itemList}>
      {items.map(item => <Item key={items.id} item={item}/>)}
    </div>
  )
}

export default ItemList