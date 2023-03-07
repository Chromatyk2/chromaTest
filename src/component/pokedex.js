import React,{useState, useEffect} from 'react';
import { Cookies, useCookies } from 'react-cookie';
import Axios from 'axios'
import '../App.css'
import PkmList from './pkmList.js'

function Pokedex() {

const [pseudo,setPseudo] = useCookies(['user']);
const [list,setList] = useState([]);
  useEffect(() => {
    Axios
      .get(`https://chromatyk-pokemon.herokuapp.com/api/getByUser/${userName}`)
      .then(function(response){
          setList(response.data);
      })
    }, [])
    return (
      <>
        <div>
          <PkmList list={list}/>
        </div>
      </>
    )
}

export default Pokedex
