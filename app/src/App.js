import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { Link, Route } from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

import logo from './images/logo.png'

const Styled = styled.div `
    nav {
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      flex-flow: row nowrap;
      padding-bottom: 1em;
      border-bottom: 1px solid #e3e3e3;
    }

    a {
      text-decoration: none;
      color: #005c7a;
      font-weight: bold;
      margin: 1.5em;
    }

    h1 {
      color: #00e0c2;
    }

    .nav-links {
      margin-top: 1em;
      padding: .5em;
    }

    .App-logo{
      margin-top: 1em;
      height: 3em;
      width: 5.5em;
      margin-left: 2em;
    }
    .Para {
      width: 12rem;
      height: 80px;
    }
    .activeLink {
      background-color: #00f5d4;
      color: white;
      border: 1px solid #00f5d4;
      padding-left: 2em;
      padding-right: 2em;
      padding-top: .25em;
      padding-bottom: .25em;
      border-radius: 20px;
    }
`

function App() {

  const [ testAPI, setTestAPI ] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => {
        setTestAPI(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [testAPI])

  return (
    <Styled>
      <div className="App">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
            <div className="nav-links"> 
              <Link to="/">Home</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/signup">Sign Up</Link>
              <Link className="activeLink" to="/login">Log-In</Link>
            </div>
        </nav>
          {/* <h2>{testAPI.name}</h2> */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
      </div>
    </Styled>
  );
}

export default App;
