import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {BiStore} from 'react-icons/bi';
import { IconContext } from 'react-icons';
import './styles/Navbar.css';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff',size: 30 }}>
   <div className='navbar'>

     <ul className = "menu menu1"> 
     <li>
       <Link to='/'>
       <AiOutlineHome/>
       </Link>
     </li>

     <li>
       <Link to='#'>
       <BiStore/>
       </Link>
     </li>
        
     <li>  
       0<AiOutlineShoppingCart onClick={showSidebar} />
     </li>
         
         
          

          </ul>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <Link to='#' >
                <AiOutlineClose size={40} onClick={showSidebar}/>
              </Link>
        </nav>
        </IconContext.Provider>
    </>
  );
};

export default Sidebar;
