import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import CreateTrade from './createTrade.js';
import '../App.css'
import moment from 'moment';

function NbProposition(props) {
  const MINUTE_MS = 1000;
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      Axios
        .get("/api/getCountPropositionByTrade/"+props.id)
        .then(function(response){
            setCount(response.data[0].count);
      })
    }, MINUTE_MS);
  }, [])
    return(
      <>
        <p>{count}</p>
      </>
    )
}
export default NbProposition
