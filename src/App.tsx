import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import "./App.scss";
import svg from 'svg/burger.svg';
import acc from 'svg/acc.svg';
import hel from 'svg/help.svg';
import img from "svg/imag.png"
import ex from "svg/exit.svg"


function App(): React.ReactElement {
  const [menu, showMenu] = useState(false)

  const switchMenu = (): void => {
    showMenu(!menu)
  }

  return (
    <div>
      <div className='menu' style={menu ? { left: 0 } : { left: "-100%" }}>
        <div className='menu-ex' onClick={() => switchMenu()}>
          <img src={`${ex}`} alt="burger" />
        </div>
        <div className='menu-content'>
          <div>Новости</div>
          <div>Кто мы</div>
          <div>Фонд</div>
          <div>Акции</div>
        </div>
      </div>
      <div style={{ marginLeft: 25, marginRight: 25 }}>
        <header>
          <div className='header'>
            <div className='left'>
              <div className='burger' onClick={() => switchMenu()}>
                <img src={svg} alt="burger" />
              </div>
              <div className='logo'>
                <img src={img} alt="sdsd" />
              </div>
              <div className='label'>
                Аль-Хайр
              </div>
            </div>
            <div className='right'>
              <img className='acc' src={`${hel}`} alt="" />
              <img src={acc} alt="sdad" />
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
          <div className='footer-parent'>
            <div className='footer-parent__title'>
              Аль-Хайр
            </div>
            <div className='footer-parent__fond'>
              Благотворительный фонд
            </div>
            <div className='footer-parent__contact'>
              <div className='footer-parent__number'>
                +7 928 570 70 77
              </div>
              <div>
                fond@al-khair.ru
              </div>
            </div>
            <div className='footer-parent__adress'>
              Наш адрес: р. Дагестан, Кизлярский р-н
            </div>
            <div className='footer-parent__copy'>
              © 2024 Фонд Аль-Хайр. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
