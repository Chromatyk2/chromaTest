import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Pagination from './paginate.js';
import CreateTrade from './createTrade.js';
import NbProposition from './nbProposition.js';
import '../App.css'
import moment from 'moment';

function Guess(props) {
  const [allGuess, setAllGuess] = useState([]);
  const { id } = useParams()
  useEffect(() => {
     Axios.get('/api/getGuess/'+id)
     .then(function(response){
        setAllGuess(response.data);
      })
  }, [])

  if(allGuess.length > 0){
    return(
      <>
        {allGuess.map((val, key) => {
            return (
              <>
              <div className="uniqueTradeContainer">
                <p className="pokemonNameTrade">{val.pseudo}</p>
                <img src={val.pkmImage}></img>
                <p className="pokemonNameTrade">{val.pkmName}</p>
                <button value={val.id} className="deleteTrade">Refuser</button>
                <button value={val.id}  className="guessTradeButton">Accepter</button>
              </div>
              </>
            )
            })
        }
      </>
    )
  }else{
      return(
        <p>Pas de propositions</p>
      )
    }
}
export default Guess
