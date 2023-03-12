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
      .get("/api/getByPokemon/"+props.pkmId+"/"+pseudo)
      .then(function(response){
          setOtherCaptures(response.data);
    })
  }, [])
  if(props.captures.length > 0){
    return (
      <>
        <div className="myCapturesContainer">
          <p className="titleMyCaptures">Mes Captures</p>
          {props.captures.map((val, key) => {
            return (
              <>
                <p className="myCapturesList">{val.pkmName+" - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
              </>
            )
          })}
        </div>
      </>
    );
  }else{
    return (
      <>
        <p className="titleMyCaptures">Vous n'avez jamais capturé ce Pokemon</p>
      </>
    );
  }
}
export default OtherCaptures
