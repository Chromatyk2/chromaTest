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
  const [choosingGuess, setChoosingGuess] = useState(null);
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
    // the item selected
    setChoosingGuess(result);
  }

  const handleOnSelect = (item) => {
    // the item selected
    setChoosingGuess(item);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  const formatResult = (item) => {
    return (
      <>
        <div className="autoSearchItemContainer">
          <div className="autoSearchItem">{item.pkmName} - {moment(item.dateCapture).utc().format('DD/MM/YYYY')}</div>
        </div>
      </>
    )
  }
  console.log(choosingGuess);
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
                  styling={
                    {
                       height: "44px",
                       border: "1px solid #dfe1e5",
                       borderRadius: "24px",
                       backgroundColor: "white",
                       boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                       color: "#212121",
                       fontSize: "16px",
                       fontFamily: "Arial",
                       iconColor: "grey",
                       lineColor: "rgb(232, 234, 237)",
                       placeholderColor: "grey",
                       clearIconMargin: '3px 14px 0 0',
                       searchIconMargin: '0 0 0 16px',
                       hoverBackgroundColor: "none",

                     }
                  }
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
                choosingGuess !== null ?
                  <>
                    <img className="imgPokemonTrade" src={choosingGuess.pkmImage}></img>
                    <p className="guessedPokemonName">{choosingGuess.pkmName}</p>
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
