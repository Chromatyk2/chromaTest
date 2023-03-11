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
   if(name[4] !== undefined && pokemon.sprites !== undefined){
   return (
     <>
      <img className="imgPokemonPage" src={pokemon.sprites.other.home.front_default}></img>
      <p className="namePokemonPage">{name[4].name}</p>
      <div className="pokemonTypeContainer">
        <img src={"../public/"+pokemon.types[0].type.name+".png"}></img>
        <img src={"../public/"+pokemon.types[1].type.name+".png"}></img>
      </div>
     </>
   );
  }
 }
}
export default PokemonPage
