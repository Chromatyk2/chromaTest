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
  useEffect(() => {
     Axios.get('https://chromatyk-pokemon.herokuapp.com/api/getMyTrades/'+props.pseudo)
     .then(function(response){
        setMyTrades(response.data);
      })
  }, [])

  function deleteTrade(e) {
    const idMainCapture = parseInt(e.target.value);
    setDisable(true);
    return Axios.post('https://chromatyk-pokemon.herokuapp.com/api/createTrade',
    {
      idMainCapture:idMainCapture,
      idSecondCapture:null,
      state:1
    }
    ).then(
      (result) => {
        setDisable(false);
        setTradeDone(true);
      },
      (error) => {
        setDisable(false);
        setTradeDone(true);
      }
    )
  }
  console.log(myTrades);
  if(myTrades.length > 0){
    return(
      <>
        {myTrades.map((val, key) => {
            return (
              <>
              <div className="uniqueTradeContainer">
                <img src={val.pkmImage}></img>
                <p className="pokemonNameTrade">{val.pkmName}</p>
                <button value={val.id} className="deleteTrade" onClick={deleteTrade}>Annuler</button>
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
