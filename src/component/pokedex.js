import React,{useState, useEffect} from 'react';
import { Cookies, useCookies } from 'react-cookie';
import Axios from 'axios'
import '../App.css'
import PkmList from './pkmList.js'

function Pokedex() {

const [pseudo,setPseudo] = useCookies(['user']);
const [list,setList] = useState([]);
const userName = pseudo.user.data[0].login;
  useEffect(() => {
    Axios
      .get(`https://chromatyk-pokemon.herokuapp.com/api/getByUser/${userName}`)
      .then(function(response){
          setList(response.data);
      })
    }, [])
    return (
      <>
        <div className="CreatePost">
          <div className="uploadPost">
              <input className="inputPseudo" type="text" placeholder="Pseudo" placeh onChange={(e)=> {setPseudo(e.target.value)}} onKeyDown={submitPost}/>
              <button className="buttonPseudo" onClick={submitPost}><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div>
        <PkmList list={list}/>
        </div>
      </>
    )
}

export default Pokedex
