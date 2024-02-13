import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Graph from "./pages/Graph/Graph";

  
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/graph" element={<Graph /> }/>
          <Route path="/*" element={ <h1>404</h1> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;