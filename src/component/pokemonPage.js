import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import '../App.css'

function PokemonPage(props) {
const [pokemon, setPokemon] = useState([]);
const [name, setName] = useState([]);
const { id } = useParams()
useEffect(() => {
 fetch("https://pokeapi.co/api/v2/pokemon/"+id)
   .then(res => res.json())
   .then(
     (result) => {
       setPokemon(result);
     }
   )
}, [])
useEffect(() => {
fetch("https://pokeapi.co/api/v2/pokemon-species/"+id+"/")
  .then(res => res.json())
  .then(
    (result) => {
      setName(result.names);
    }
  )
}, [])
console.log(pokemon);
    return (
      <>
      {pokemon &&
        <img src={pokemon.sprites.other.home.front_default}></img>
      }
      </>
     );
}
export default PokemonPage
