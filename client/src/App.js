import './App.css';
import Home from "./home";
import Banner from "./banner";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Market from "./market";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HomeComponent from "./home";
import MarketComponent from "./market";
import NavbarContent from "./nav";
import ShowDataComponent from "./showdata";
import Candlestick from "./detail";
import Detail from "./detail";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <NavbarContent/>
              <Routes>
                  <Route index path="/" element={<HomeComponent/>}/>
                  <Route index path="/home/*" element={<HomeComponent/>}/>
                  <Route path="/market/*" element={<MarketComponent/>}/>
                  <Route path="/showdata/*" element={<ShowDataComponent/>}/>
                  <Route path="/detail/*" element={<Detail/>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
