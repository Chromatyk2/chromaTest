import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import CreateTrade from './createTrade.js';
import '../App.css'
import moment from 'moment';

function MyTrades(props) {
  const [myTrades, setMyTrades] = useState([]);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
     Axios.get('https://chromatyk-pokemon.herokuapp.com/api/getMyTrades/'+props.pseudo)
     .then(function(response){
        setMyTrades(response.data);
      })
  }, [])

  function deleteTrade(e) {
    const id = parseInt(e.target.value);
    return Axios.delete('https://chromatyk-pokemon.herokuapp.com/api/deleteTrade',
    {
      idTrade:id
    }
    ).then(
      (result) => {
        setDisable(false);
      },
      (error) => {
        setDisable(false);
      }
    )
  }
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
export default MyTrades
