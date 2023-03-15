import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import '../App.css'
// import Pagination from './paginate.js';
// import moment from 'moment';

function CreateTrade(props) {
const [capture, setCapture] = useState([]);
  useEffect(() => {
    Axios
      .get("https://chromatyk-pokemon.herokuapp.com/api/getByMainIdCapture/"+props.idMainCapture)
      .then(function(response){
          setCapture(response.data);
    })
  }, [])
  if(capture.length > 0){
    return (
      <>
        <p className="alreadyTraded">Echange en cours</p>
      </>
    );
  }else{
    return (
      <>
          <p className="createTradeButton">Echanger</p>
      </>
    );
  }
}
export default CreateTrade
