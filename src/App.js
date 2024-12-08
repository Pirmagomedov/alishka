import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Graph from "./pages/Graph/Graph";
import Main from "./pages/Main/Main";

  
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main /> }/>
          <Route path="/home" element={ <Home /> }/>
          <Route path="/graph" element={<Graph /> }/>
          <Route path="/*" element={ <h1>404</h1> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;