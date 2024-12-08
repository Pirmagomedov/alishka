import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main.tsx";
import React from "react"

   
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main /> }/>
          <Route path="/*" element={ <h1>404</h1> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;