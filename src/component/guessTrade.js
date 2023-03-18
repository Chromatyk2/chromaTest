import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import CreateTrade from './createTrade.js';
import '../App.css'
import moment from 'moment';

function GuessTrade(props) {
const [trade, setTrade] = useState([]);
  const { id } = useParams()
  useEffect(() => {
     Axios.get('/api/getTradeById/'+id)
     .then(function(response){
        setTrade(response.data);
      })
  }, [])
  console.log(trade);
  if(trade.length > 0){
    {trade.map((val, key) => {
       return (
         <>
            <div className="uniqueTradeContainer">
              <img src={val.pkmImage}></img>
              <p className="pokemonNameTrade">{val.pkmName}</p>
              <p className="pokemonNameTrade">({val.pseudo})</p>
            </div>
         </>
       )
     })
    }
  }
}
export default GuessTrade
