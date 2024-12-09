import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';

function App(): React.ReactElement {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/*" element={ <h1>404</h1> }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
