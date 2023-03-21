import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter, Link} from "react-router-dom";

function NavBar(props) {
const pseudo = props.cookies.user.data[0].login;
const [count, setCount] = useState(0);
  useEffect(() => {
    Axios
      .get("/api/getCountProposition/"+pseudo)
      .then(function(response){
          setCount(response.data.count);
    })
  }, [])
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navLink" to="/">Accueil</Link>
            <Link className="navLink" to="/pokedex">Pokedex</Link>
            <Link className="navLink" to="/leaderboard">Classement</Link>
            <Link className="navLink" to="/myTrades">Mes Echanges</Link>
            <Link className="navLink" to="/tradePlace">Place aux echanges</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
