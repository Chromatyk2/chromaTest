import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { useCookies } from 'react-cookie';
import Axios from 'axios'
import Pagination from './paginate.js';
import '../App.css'
import moment from 'moment';

function OtherCaptures(props) {
const [otherCaptures, setOtherCaptures] = useState([]);
const [cookies, setCookie] = useCookies();
const pseudo = cookies.user.data[0].login;
  useEffect(() => {
    Axios
      .get("https://chromatyk-pokemon.herokuapp.com/api/getByPokemon/"+props.pkmId+"/"+pseudo)
      .then(function(response){
          setOtherCaptures(response.data);
    })
  }, [])
  if(otherCaptures.length > 0){
    return (
      <>
        <div className="myCapturesContainer">
          <p className="titleMyCaptures">Qui possede ce Pokemon ?</p>
          {otherCaptures.map((val, key) => {
            return (
              <>
                <p className="myCapturesList">{val.pseudo+" - "+val.pkmName+" - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
              </>
            )
          })}
        </div>
      </>
    );
  }else{
    return (
      <>
        <p className="titleMyCaptures">Personnes n'a capture ce Pokemon</p>
      </>
    );
  }
}
export default OtherCaptures
