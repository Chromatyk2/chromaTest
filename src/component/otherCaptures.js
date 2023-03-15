import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { useCookies } from 'react-cookie';
import Axios from 'axios'
import Pagination from './paginate.js';
import '../App.css'
import moment from 'moment';

function OtherCaptures(props) {
const [trades, setTrades] = useState([]);
const [cookies, setCookie] = useCookies();
const pseudo = cookies.user.data[0].login;
useEffect(() => {
  Axios
    .get("https://chromatyk-pokemon.herokuapp.com/api/getTradesByPokemon/"+props.pkmId)
    .then(function(response){
        setTrades(response.data);
  })
}, [])
  if(trades.length > 0){
    return (
      <>
        <div className="myCapturesContainer">
          <p className="titleMyCaptures">Les echanges</p>
          {trades.map((val, key) => {
            return (
              {val.shiny == 1 ?
                <>
                  <p className="myCapturesList">{val.pseudo+" - "+val.pkmName+" - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
                </>
                :
                <>
                  <p className="myCapturesList shinyPokemonList">{val.pseudo+"(shiny) - "+val.pkmName+" - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
                </>
              }
            )
          })}
        </div>
      </>
    );
  }else{
    return (
      <>
        <p className="titleMyCaptures">Personne ne propose ce pokemon a l'échange</p>
      </>
    );
  }
}
export default OtherCaptures
