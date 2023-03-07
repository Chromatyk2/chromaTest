import React,{useState, useEffect} from 'react';
import { HashRouter, Route, Routes} from "react-router-dom";
import { useCookies } from 'react-cookie';
import $ from "jquery";
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'
import HomePage from './component/home.js';
import Pokedex from './component/pokedex.js';
import BasicExample from './component/nav.js';
import LaderBoard from './component/laderboard.js';
import NavBar from './component/navbar.js';
import Login from './services/auth.services.js';
function App() {
  const [cookies, setCookie] = useCookies();
  if(Object.keys(cookies).length == 0) {
    return <Login />
  }
  return(
    <>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<HomePage cookies={cookies} />} />
          <Route exact path="/pokedex" element={<Pokedex cookies={cookies} />} />
          <Route exact path="/leaderboard" element={<LaderBoard cookies={cookies} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
