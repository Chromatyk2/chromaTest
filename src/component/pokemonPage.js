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
console.log(id);
useEffect(() => {
 fetch("https://pokeapi.co/api/v2/pokemon/"+randomNumber)
   .then(res => res.json())
   .then(
     (result) => {
       setIsLoaded(true);
       setItems(result);
     },
     (error) => {
       setIsLoaded(true);
       setError(error);
     }
   )
}, [])
useEffect(() => {
fetch("https://pokeapi.co/api/v2/pokemon-species/"+randomNumber+"/")
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
    return (
      <>
        <div className="stats">
          <p className="labelStats">Shiny<br/><span className="valueStats">{nbShiny}</span></p>
          <p className="labelStats">Total<br/><span className="valueStats">{nbTotal}</span></p>
        </div>
          <Pagination
            itemsPerPage={30}
            items={props.list}
          />
        </>
     );
}
export default PokemonPage
