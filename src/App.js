import React from 'react';
import {Navbar} from './components/Sidebar.js';
import './styles/App.css';
import { Link } from 'react-router-dom';




function App() {
  return (
      <div id="home" style={{
        height: "100vh",
        margin: 0,
        padding: 0,
      }}>
        <Navbar/>
        <Link to ="/store"><button id = "shopBtn">Shop now</button></Link>
        
        <h1 id="title">Be who<br/> you<br/> wanna be.</h1>
        <h1 id="brand">Drip-Store</h1>
        
   </div>
  );
}

export default App;
