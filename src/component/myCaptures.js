import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import '../App.css'
import moment from 'moment';

function MyCaptures(props) {
  if(props.captures.length > 0){
    return (
      <>
        <div className="myCapturesContainer">
          <p className="titleMyCaptures">Mes Captures</p>
          {trades.map((val, key) => {
              return val.shiny == 1 ?
                <>
                  <p className="myCapturesList shinyPokemonList">{val.pseudo+" - "+val.pkmName+"(shiny) - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
                </>
                :
                <>
                  <p className="myCapturesList">{val.pseudo+" - "+val.pkmName+" - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
                </>
              })
          }
        </div>
      </>
    );
  }else{
    return (
      <>
        <p className="titleMyCaptures">Vous n'avez jamais capture ce Pokemon</p>
      </>
    );
  }
}
export default MyCaptures
