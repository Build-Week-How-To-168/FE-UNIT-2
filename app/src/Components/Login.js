import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Signup from '../Components/Signup';


const Styles = styled.div `
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: 10%;
        margin-left: 37.5vw;
        margin-right: 37.5vw;
        background-color: #f7f7f7;
        border: 1px solid  #ebebeb;
        box-shadow: 2px 3px 10px 5px #888888;
    }
    .container-two {
        padding: 2em;
    }
    h3 {
        font-size: 25px;
        color: black;
    } 
    input{
        padding: 1.5em;
        padding-left: 2vw;
        padding-right: 2vw;
        border: 1px solid #ebebeb;
        border-radius: 8px;
    }
    button {
        margin-bottom: 2em;
        margin-left: 6vw;
        margin-right: 6vw;
        padding: 1em;
        background-color: #00f5d4;
        border: 1px solid #00f5d4;
        border-radius: 20px;
        color: white;
    }
`


function Login() {

  return (
    <Styles>
      <form>
          <div className="container">
          <h3>Log into your account</h3>
            <div className="container-two">
                <label htmlFor="username"></label>
                <input 
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                />
           </div>
           <div className="container-two">
                <label htmlFor="password"></label>
                <input
                id="password"
                name="password"
                placeholder="Password"
                />
           </div> 
           <button>Log-In</button>
            <Link to='/signup'>Don't have an account? Sign up!</Link>
           </div>  
           <Route path='/signup'component={Signup}/>
      </form>
    </Styles>
  )

}


export default Login;