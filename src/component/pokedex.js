import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import PkmList from './pkmList.js'

function Pokedex() {

const [pseudo,setPseudo] = useCookies(['user']);
const [list,setList] = useState([]);
console.log(pseudo);
const submitPost = () => {
    Axios
      .get(`https://chromatyk-pokemon.herokuapp.com/api/getByUser/${pseudo}`)
      .then(function(response){
          setList(response.data);
      })
    }
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
