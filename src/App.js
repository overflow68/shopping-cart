import React from 'react';
import {Navbar} from './components/Sidebar.js';
import './styles/App.css';
import { Link } from 'react-router-dom';





function App() {
  return (
      <div id="home">
        <Navbar/>
        
        <div className="main-container">
          <div className="contents"><h1 id="title">Be who you wanna be.</h1>
        <div><Link to ="/store"><button id = "shopBtn">Shop now</button></Link></div>
       
        
        </div>
        
        
        </div>
        
   </div>
  );
}

export default App;