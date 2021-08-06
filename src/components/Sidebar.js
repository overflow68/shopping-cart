import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai';
import {BiStore} from 'react-icons/bi';
import { IconContext } from 'react-icons';
import CartItem from '../components/cartItem.js'
import '../styles/Navbar.css';

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState({
    cart:props.cart,
    active:false,
    totalPrice:0
  });

  const showSidebar = () =>{
    let copyState = {...sidebar};
    copyState.active =!copyState.active;
    setSidebar(copyState);
    
 }
 

  return (
    <>
    <IconContext.Provider value={{ color: '#fff',size: 30 }}>
   <div className='navbar'>

     <ul className = "menu menu1"> 
     <li>
       <Link to='/'> {/* home */}
       <AiOutlineHome/>
       </Link>
     </li>

     <li>
       <Link to='/store'>
       <BiStore/> {/* shop */}
       </Link>
     </li>
        
     <li>  
       {sidebar.cart.length}<AiOutlineShoppingCart onClick={showSidebar} /> {/* shopping cart */}
     </li>
         
     </ul>
     
        </div>
        <div className={sidebar.active ? 'darkBg active' : 'darkBg'} onClick={showSidebar}></div>
        </IconContext.Provider>
        <nav className={sidebar.active ? 'nav-menu active' : 'nav-menu'}>
          <h1>Your shopping cart</h1>
             {sidebar.cart.map(item =>{return <CartItem item={item}/>})}
             <button id = "checkout">Checkout now</button>
        </nav>
        
    </>
  );
};

const Navbar =()=>{
  return(
    <IconContext.Provider value={{ color: '#fff',size: 30 }}>
    <div className='navbar'>

     <ul className = "menu menu1"> 
     <li>
       <Link to='/'> {/* home */}
       <AiOutlineHome/>
       </Link>
     </li>

     <li>
       <Link to='/store'>
       <BiStore/> {/* shop */}
       </Link>
     </li>

     </ul>
     
        </div></IconContext.Provider>
  );
};

export {Sidebar,Navbar};
