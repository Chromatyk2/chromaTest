import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';
import $ from "jquery";
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'
import HomePage from './component/home.js';
import Pokedex from './component/pokedex.js';
import BasicExample from './component/nav.js';
import LaderBoard from './component/laderboard.js';
import NavBar from './component/navbar.js';
import Login from './services/auth.services.js';
class App extends React.Component {
      static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
      constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
          token: cookies.set('oauth')
        };
      }
     render() {
        let homePage = (!this.state.token) ? <Login/> : <HomePage/>
        return (
          <>
            <NavBar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={homePage} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/leaderboard" element={<LaderBoard />} />
              </Routes>
            </BrowserRouter>
          </>
        )
    }
}

export default App;
