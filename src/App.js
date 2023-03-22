import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useCookies } from 'react-cookie';
import $ from "jquery";
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'
import HomePage from './component/home.js';
import Pokedex from './component/pokedex.js';
import LaderBoard from './component/laderboard.js';
import NavBar from './component/navbar.js';
import Login from './services/auth.services.js';
import PokemonPage from './component/pokemonPage.js';
import MyTradePlace from './component/myTradePlace.js';
import TradePlace from './component/tradePlace.js';
import GuessTrade from './component/guessTrade.js';
function App() {
  const [cookies, setCookie] = useCookies();
  if(Object.keys(cookies).length == 0) {
    return <Login />
  }
  console.log(cookies);
  return(
    <>
      <BrowserRouter>
        <NavBar cookies={cookies} />
        <Routes>
          <Route path="/" element={<HomePage cookies={cookies} />} />
          <Route path="/pokedex" element={<Pokedex cookies={cookies} />} />
          <Route path="/leaderboard" element={<LaderBoard cookies={cookies} />} />
          <Route path="/pokemon/:id" element={<PokemonPage cookies={cookies} />} />
          <Route path="/myTrades" element={<MyTradePlace cookies={cookies} />} />
          <Route path="/tradePlace" element={<TradePlace cookies={cookies} />} />
          <Route path="/guessTrade/:id" element={<GuessTrade cookies={cookies} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
