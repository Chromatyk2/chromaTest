import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import MyTrades from './myTrades.js';
import '../App.css'

function TradePlace(props) {
const pseudo = props.cookies.user.data[0].login;
   return (
     <>
      <div className="tradePlaceContainer">
        <p className="titleMyCaptures">Echanges</p>
        <div className="myTradesContainer">
        </div>
      </div>
     </>
   );
}
export default TradePlace
