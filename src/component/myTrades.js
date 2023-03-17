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
  console.log(myTrades);
  if(myTrades.length > 0){
    return(
      <>
        {myTrades.map((val, key) => {
            return (
              <>
              <div className="uniqueTradeContainer">
                <img src={val.pkmImage}></img>
                <p>{val.pkmName}</p>
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
