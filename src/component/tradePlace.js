import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import MyTrades from './myTrades.js';
import '../App.css'

function TradePlace(props) {
  const pseudo = props.cookies.user.data[0].login;
  const [myTrades, setMyTrades] = useState([]);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
     Axios.get('/api/getAllTrades/'+props.pseudo)
     .then(function(response){
        setMyTrades(response.data);
      })
  }, [])

  if(myTrades.length > 0){
    return(
      <>
        {myTrades.map((val, key) => {
            return (
              <>
              <div className="uniqueTradeContainer">
                <img src={val.pkmImage}></img>
                <p className="pokemonNameTrade">{val.pkmName}</p>
                <button value={val.tradeId} className="deleteTrade" onClick={deleteTrade} disabled={disable}>{disable === false ? "Annuler" : "Traitement"}</button>
              </div>
              </>
            )
            })
        }
      </>
    )
  }else{
      return(
        <p>Pas de pokemon en echange</p>
      )
    }
}
export default TradePlace
