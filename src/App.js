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
          <Route exact path="/">
            <HomePage cookies={cookies} />
          </Route>
          <Route exact path="/pokedex">
            <Pokedex cookies={cookies} />
          </Route>
          <Route exact path="/leaderboard">
            <LaderBoard cookies={cookies} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
