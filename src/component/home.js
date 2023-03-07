import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css'
import PkmList from './pkmList.js'

function HomePage(props) {
  return (
    <>
      <p className="myNetworks">Mes réseaux</p>
      <div className="social">
        <a className="socialLink" target='_blank' href="https://discord.gg/8V6fyQdSCG"><i class="fa-brands fa-discord"></i>Discord</a>
        <a className="socialLink" target='_blank' href="https://twitch.tv/chromatyk"><i class="fa-brands fa-twitch"></i>Twitch</a>
        <a className="socialLink" target='_blank' href="https://twitter.com/Chromatyk_"><i class="fa-brands fa-twitter"></i>Twitter</a>
        <a className="socialLink" target='_blank' href="https://www.instagram.com/chromatyk_/"><i class="fa-brands fa-instagram"></i>Instagram</a>
      </div>
    </>
  )
}

export default HomePage
