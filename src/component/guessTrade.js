import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Axios from 'axios'
import Pagination from './paginate.js';
import CreateTrade from './createTrade.js';
import '../App.css'
import moment from 'moment';

function GuessTrade(props) {
  const [trade, setTrade] = useState([]);
  const [guessedPokemon, setGuessedPokemon] = useState([]);
  const { id } = useParams()
  useEffect(() => {
     Axios.get('/api/getTradeById/'+id)
     .then(function(response){
        setTrade(response.data);
      })
  }, [])
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
  if(trade.length > 0){
    return (
      <>
          <div className="tradeHub">
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
          <div className="guessedPokemon">
            <img className="imgPokemonTrade" src={trade[0].pkmImage}></img>
            <p className="guessedPokemonName">{trade[0].pkmName}</p>
          </div>
          <div className="arrows">
            <img className="arrowImage" src={`/images/arrows.png`}></img>
          </div>
          <div className="guessedPokemon">
            {guessedPokemon.length > 0 ?
                <>
                  <img className="imgPokemonTrade" src={trade[0].pkmImage}></img>
                  <p className="guessedPokemonName">{trade[0].pkmName}</p>
                </>
              :
                <>
                  <p>Choisis un Pokemon a echanger</p>
                </>
            }
          </div>
        </div>
      </>
    )
  }
}
export default GuessTrade
