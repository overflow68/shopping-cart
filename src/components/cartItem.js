import React from 'react';
import '../styles/CartItem.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'


function CartItem(props) {

  const roundPrice = (number) =>{
    let n = number.toFixed(2);

    return n;

  }

  

  return (
    <div className="cartItem" id={props.item.id}>
      <div className="contain pic"><img alt ="" src={props.item.picture} width="165px" height="200px"></img></div>
      <div className="contain">
      <div className ="statsCont">
      <div className="containStat"><p>{props.item.description}</p></div>
      <div className="containStat"><p> {roundPrice(props.item.price * props.item.quantity.toFixed(2))}€</p></div>
      <div className="containStat"> <div className="quantity"><AiOutlineMinusCircle size="40" onClick={props.remove}/><div className="quant">{props.item.quantity}</div><AiOutlinePlusCircle size="40" onClick={props.add}/></div></div>

      </div>
      </div>
 </div>
);
}

export default CartItem;