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
  console.log(trade[0]);
  if(trade.length > 0){
    return (
      <>
        <img className="imgPokemonPage" src={trade[0].pkmImage}></img>
        <p>{trade[0].pkmName}</p>
      </>
    )
  }
}
export default GuessTrade
