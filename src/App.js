import { BrowserRouter, Route, Routes} from "react-router-dom";
import $ from "jquery";
import './App.css';
import 'react-tooltip/dist/react-tooltip.css'
import HomePage from './component/home.js';
import Pokedex from './component/pokedex.js';
import BasicExample from './component/nav.js';
import LaderBoard from './component/laderboard.js';
import NavBar from './component/navbar.js';
import Main from './component/login.js';
function Main() {
  // ID de l'application récupéré après l'avoir enregistrée
  const CLIENT_ID = "401m5gmmyoy4jme9jo4n7bzz5zzt8t";

  // Adresse où l'on veut que l'utilisateur soit redirigé après avoir autorisé
  // l'application. Cette adresse DOIT être l'une de celles déclarées dans
  // l'application sur dev.twitch.tv !!
  const REDIRECT_URI = "https://chromatest.netlify.app/";

  // Liste des éléments auxquels on souhaite accéder...  On reparlera de ça un
  // peu plus tard ;)
  const SCOPES = [];

  // Diverses fonctions utilitaires
  const helpers = {

      // Encode un objet sous forme d'une querystring utilisable dans une URL :
      // {"name": "Truc Muche", "foo": "bar"}  ->  "name=Truc+Muche&foo=bar"
      encodeQueryString: function(params) {
          const queryString = new URLSearchParams();
          for (let paramName in params) {
              queryString.append(paramName, params[paramName]);
          }
          return queryString.toString();
      },

      // Décode une querystring sous la forme d'un objet :
      // "name=Truc+Muche&foo=bar"  ->  {"name": "Truc Muche", "foo": "bar"}
      decodeQueryString: function(string) {
          const params = {};
          const queryString = new URLSearchParams(string);
          for (let [paramName, value] of queryString) {
              params[paramName] = value;
          }
          return params;
      },

      // Récupère et décode les paramètres de l'URL
      getUrlParams: function() {
          return helpers.decodeQueryString(window.location.hash.slice(1));
      },

  };

  // Fonctions liées à Twitch
  const twitch = {

      // Vérifie si l'utilisateur est authentifié ou non
      isAuthenticated: function() {
          const params = helpers.getUrlParams();
          return params["access_token"] !== undefined;
      },

      // Redirige l'utilisateur sur la page d'authentification de Twitch avec les
      // bons paramètres
      authentication: function() {
          const params = {
              client_id: CLIENT_ID,
              redirect_uri: REDIRECT_URI,
              response_type: "token",
              scope: SCOPES.join(" "),
          };
          const queryString = helpers.encodeQueryString(params);
          const authenticationUrl = `https://id.twitch.tv/oauth2/authorize?${queryString}`;
          window.location.href = authenticationUrl;
      },

  };

// Fonction principale

  return (
    <>// On lance l'authentification si l'utilisateur n'est pas authentifié
      {!twitch.isAuthenticated() ?
        <button>Connexion !</button>
      :
        <>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Main />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="/leaderboard" element={<LaderBoard />} />
            </Routes>
          </BrowserRouter>
        </>
      }
    </>
  )
}
function App() {
  return(
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Main />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/leaderboard" element={<LaderBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
