import { BrowserRouter, Route, Routes} from "react-router-dom";
import $ from "jquery";
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'
import AuthService from "./services/auth.service.js";
import HomePage from './component/home.js';
import Pokedex from './component/pokedex.js';
import BasicExample from './component/nav.js';
import LaderBoard from './component/laderboard.js';
import NavBar from './component/navbar.js';
function App() {
  return (
    <>
      {!twitch.isAuthenticated() ?
        <button onClick={AuthService.twitch.authentication}>Connexion !</button>
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

export default App;
