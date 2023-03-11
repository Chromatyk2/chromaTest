import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import '../App.css'

function PokemonPage(props) {
const [pokemon, setPokemon] = useState([]);
const [name, setName] = useState([]);
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const { id } = useParams()
useEffect(() => {
 fetch("https://pokeapi.co/api/v2/pokemon/"+id)
   .then(res => res.json())
   .then(
     (result) => {
       setIsLoaded(true);
       setPokemon(result);
     },
     (error) => {
       setIsLoaded(true);
       setError(error);
     }
   )
}, [])
useEffect(() => {
fetch("https://pokeapi.co/api/v2/pokemon-species/"+id+"/")
  .then(res => res.json())
  .then(
    (result) => {
      setIsLoaded(true);
      setName(result.names);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
  )
}, [])

 if (error) {
   return <div>Error: {error.message}</div>;
 } else if (!isLoaded) {
   return <div></div>;
 } else {
   return (
     <>
     <p className="pkmName">{name[4].name}<img className="shinySpark" src="https://res.cloudinary.com/shiny24/image/upload/v1669396824/pokemon/shiny_symbol_pokemon_tdxjdc.png"></img></p>
      <span className="pokemonImgSpan">
        <img className="pokemonImg" src={items.sprites.other.home.front_shiny}></img>
      </span>
    </>
   );
 }
}
export default PokemonPage
