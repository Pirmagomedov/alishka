import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <h1>Добро пожаловать в Аль-Хайр! Сегодня понедельник</h1> }/>
          <Route path="/*" element={ <h1>404</h1> }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;