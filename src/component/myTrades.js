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
   Axios.get('https://chromatyk-pokemon.herokuapp.com/myTrades',
    {
      pseudo:props.pseudo
    }
  ).then(
    (result) => {
      setMyTrades(result.data);
    },
    (error) => {
      setMyTrades(result.data);
    }
  )
}, [])
console.log(myTrades);
  return(
    <p>Oui</p>
  )
}
export default MyTrades
