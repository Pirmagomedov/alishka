import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import "./App.scss";
import svg from 'svg/burger.svg';
import acc from 'svg/acc.svg';
import hel from 'svg/help.svg';
import img from "svg/imag.png"


function App(): React.ReactElement {

  return (
    <div style={{ marginLeft: 25, marginRight: 25 }}>
      <header>
        <div className='header'>
          <div className='left'>
            <div className='burger' onClick={() => alert("Здесь будет меню")}>
              <img src={`${svg}`} alt="burger" />
            </div>
            <div className='logo'>
              <img src={`${img}`} alt="" />
            </div>
            <div className='label'>
              Аль-Хайр
            </div>
          </div>
          <div className='right'>
            <img className='acc' src={`${hel}`} alt="" />
            <img src={`${acc}`} alt="" />
          </div>
        </div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      <footer>
        <div className='footer'>

        </div>
      </footer>
    </div>
  );
}

export default App;
