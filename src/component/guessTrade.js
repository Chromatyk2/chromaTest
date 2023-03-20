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
  const [items, setItems] = useState([]);
  const { id } = useParams()
  useEffect(() => {
     Axios.get('/api/getTradeById/'+id)
     .then(function(response){
        setTrade(response.data);
      })
  }, [])

  const pseudo = props.cookies.user.data[0].login;
    useEffect(() => {
      Axios
        .get("/api/getByUserAll/"+pseudo)
        .then(function(response){
            setItems(response.data);
        })
      }, [])
console.log(items);
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
        <div className="autoSearchItemContainer">
          <span className="autoSearchItem">{item.pkmName} - {moment(item.dateCapture).utc().format('DD/MM/YYYY')}</span>
        </div>
      </>
    )
  }
  if(trade.length > 0){
    return (
      <>
          {items.length > 0 &&
              <div className="autoCompleteSearch">
                <ReactSearchAutocomplete
                  items={items}
                  fuseOptions={{ keys: ["pkmName"] }}
                  resultStringKeyName="pkmName"
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  formatResult={formatResult}
                />
              </div>
          }
          <div className="tradeHub">
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
