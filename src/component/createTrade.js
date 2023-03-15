import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import '../App.css'
// import Pagination from './paginate.js';
// import moment from 'moment';

function CreateTrade(props) {
const [capture, setCapture] = useState([]);
const [loading, setLoading] = useState(false);
  useEffect(() => {
    Axios
      .get("https://chromatyk-pokemon.herokuapp.com/api/getByMainIdCapture/"+props.idMainCapture)
      .then(function(response){
          setCapture(response.data);
          setLoading(true);
    })
  }, [])
  function createTrade(e) {
    const idMainCapture = parseInt(e.target.value);
    return Axios.post('https://chromatyk-pokemon.herokuapp.com/api/createTrade', {
      idMainCapture:idMainCapture,
      idSecondCapture:null,
      state:1
    }).then((response) => {
        console.log(response);
    })
  }
  if(loading){
    if(capture.length > 0){
      return (
        <>
          <p className="alreadyTraded">Echange en cours</p>
        </>
      );
    }else{
      return (
        <>
            <button value={props.idMainCapture} className="createTradeButton" onClick={createTrade}>Echanger</button>
        </>
      );
    }
  }
}
export default CreateTrade
