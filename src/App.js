import './App.css';
import Box from './box.svg';
import React from 'react';
import Logo from './logo.svg';
import Faq from './components/Faq' 
function App() {
  return (
    <div className="App">
      <div className="hero-img">
        <div className="first-img-container">
          <img src={Box} className='box' alt="Box" />
        </div>
        <div className="second-img-container">
            <img src={Logo} className='logo' alt="logo" />
        </div>
        
      </div>
      <Faq />
    </div>
  );
}

export default App;
