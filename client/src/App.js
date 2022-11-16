import './App.css';
import Home from "./home";
import Banner from "./banner";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Market from "./market";

import HomeComponent from "./home";
import MarketComponent from "./market";
import Nav from "./nav";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Nav/>
              <Routes>
                  <Route index path="/" element={<HomeComponent/>}/>
                  <Route index path="/home/*" element={<HomeComponent/>}/>
                  <Route index path="/market/*" element={<MarketComponent/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
