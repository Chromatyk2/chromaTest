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
        <p className="titleMyCaptures">Vous avez capturé {props.captures.length} fois :</p>
        {props.captures.map((val, key) => {
          return (
            <>
              <p>{val.pkmName+" - "+moment(val.dateCapture).utc().format('DD/MM/YYYY')}</p>
            </>
          )
        })}
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
export default MyCaptures
