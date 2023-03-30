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
  const [trade, setTrade] = useState([]);
  const [allGuess, setAllGuess] = useState([]);
  const [disable, setDisable] = useState(false);
  const { id } = useParams()
  const pseudo = props.cookies.user.data[0].login;
  useEffect(() => {
     Axios.get('/api/getGuess/'+id)
     .then(function(response){
        setAllGuess(response.data);
      })
  }, [])
  useEffect(() => {
     Axios.get('/api/getTradeById/'+id)
     .then(function(response){
        setTrade(response.data);
      })
  }, [])
  function deleteGuess(e) {
    const idGuess = parseInt(e.target.value);
    return Axios.delete('/api/deleteGuess/'+idGuess)
    .then(
      (result) => {
           Axios.get('/api/getGuess/'+id)
           .then(function(response){
              setAllGuess(response.data);
            })
      },
      (error) => {
        setDisable(false);
      }
    )
  }
  function accepteGuess(e) {
    const guess = e.target.value;
    console.log(guess);
    return
      Axios.post('/api/capture',
      {
        pseudo: pseudo,
        pkmName: guess.pkmName,
        pkmImage:guess.pkmImage,
        pkmId:guess.pkmId,
        shiny:guess.shiny,
        dateCapture:new Date()
      }
    )
  }
  if(allGuess.length > 0){
    return(
      <>
        {allGuess.map((val, key) => {
            return (
              <>
               <div className="tradePlaceContainer">
                 <p className="titleMyCaptures">Propostions</p>
                 <div className="myTradesContainer">
                    <div className="uniqueTradeContainer">
                      <p className="pokemonNameTrade">{val.pseudo}</p>
                      <img src={val.pkmImage}></img>
                      <p className="pokemonNameTrade">{val.pkmName}</p>
                      <button value={val.id} onClick={deleteGuess} className="deleteTrade" disabled={disable}>{disable === false ? "Refuser" : "Traitement"}</button>
                      <button value={val} onClick={accepteGuess} className="guessTradeButton" disabled={disable}>{disable === false ? "Accepter" : "Traitement"}</button>
                    </div>
                  </div>
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
