import React,{useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
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
        cookies.set('oauth', 0);
        this.state = {
          token: cookies.get('oauth')
        };
      }
     render() {
        return (
          <>
          {this.state.token == 0 ?
            <Login/>
            :
            <>
              <NavBar />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/pokedex" element={<Pokedex />} />
                  <Route path="/leaderboard" element={<LaderBoard />} />
                </Routes>
              </BrowserRouter>
            </>
          }
          </>
        )
    }
}

export default withCookies(App);
