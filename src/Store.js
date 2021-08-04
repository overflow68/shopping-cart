import React, { useState } from 'react';
import Sidebar from './components/Sidebar.js';
import './styles/Store.css';
import items from './storeData.js';
import Item from './components/Item.js'

function Store() {

  const [products , setProducts] = useState(
    {
      product:items,
      cart:[]
    });
    const addToCart =(e)=>{
      const copyState = {...products};

      copyState.product.map(item=>item.id === e.target.id && !copyState.cart.includes(item) ? copyState.cart.push(item) : item);
      console.log(copyState.cart);  FICAMOS AQUI
    }
  
  return (
      <div className="Store">
       <Sidebar/>
       <div id ="itemContainer">
         {products.product.map(item=>{
           return <Item addToCart = {addToCart} item ={item}/>
         })}
        
       </div>
       

   </div>
  );
}

export default Store;
