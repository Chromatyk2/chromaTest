import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import PkmList from './pkmList.js'

function LaderBoard() {
    const [laderBoard,setLaderboard] = useState([]);
    const [topThree,setTopThree] = useState([]);
    const [others,setOthers] = useState([]);
    function displayNormalLaderboard(e) {
      let shiny = e.target.value;
        Axios
          .get(`https://chromatyk-pokemon.herokuapp.com/api/getLaderboard/0`)
          .then(function(response){
              setLaderboard(response.data);
              setTopThree(response.data.slice(0,3));
              setOthers(response.data.slice(3));
        })
    }
    function displayShinyLaderboard(e) {
      let shiny = e.target.value;
        Axios
          .get(`https://chromatyk-pokemon.herokuapp.com/api/getLaderboard/1`)
          .then(function(response){
              setLaderboard(response.data);
              setTopThree(response.data.slice(0,3));
              setOthers(response.data.slice(3));
        })
    }
    return (
      <>
        <div className="leaderBoardSwitch">
            <button value="0" onClick={displayNormalLaderboard}>Global</button>
            <button value="1" onClick={displayShinyLaderboard}>Shiny</button>
        </div>
        <div className="center">
        {topThree.length > 0 &&
          <>

            <div className="top3Mobile">
              <div class="item">
                <div class="pic picOne"></div>
                <div class="name">
                  {topThree[0].pseudo}
                </div>
                <div class="score">
                  {topThree[0].nbCapture}
                </div>
              </div>
            </div>
          </>
        }
        <div class="list">
        {others.length > 0 &&
          others.map((val, key) => {
          return (
            <div class="itemOne">
              <div class="picOne"><p>#{key + 4}</p></div>
              <div class="name">
                {val.pseudo}
              </div>
              <div class="score">
                {val.nbCapture}
              </div>
            </div>
           )
         })
        }
          </div>
    </div>
      </>
    )
}

export default LaderBoard
