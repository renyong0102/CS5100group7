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

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <NavbarContent/>
              <Routes>
                  <Route index path="/" element={<HomeComponent/>}/>
                  <Route index path="/home/*" element={<HomeComponent/>}/>
                  <Route index path="/market/*" element={<MarketComponent/>}/>
                  <Route index path="/showdata/*" element={<ShowDataComponent/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
