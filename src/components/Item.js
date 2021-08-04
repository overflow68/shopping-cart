import React from 'react';



function Item(props) {
  return (
      <div className="Item" id={props.item.id}>
        <div className="cont"><img width="165px" height="200px" alt ="" src = {props.item.picture}></img></div>
        <p>{props.item.description}</p>
        <p className="price">{props.item.price}€</p>
        <button id={props.item.id} className="shopBtn" onClick={props.addToCart}>Add to cart</button>

   </div>
  );
}

export default Item;