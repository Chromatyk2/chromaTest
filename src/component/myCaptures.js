import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import '../App.css'

function MyCaptures(props) {
console.log(props.captures);
  return (
    <>
    <p>Vous avez capturé {props.captures.length} fois :</p>
      {props.captures.map((val, key) => {
        return (
          <>
            <p>{val.dateCapture}</p>
          </>
        )
      })}
    </>
  );
}
export default MyCaptures
