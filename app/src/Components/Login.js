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
        padding: 1.25em;
    }
    h3 {
        font-size: 25px;
        color: #002925;
    } 
    input{
        padding: 1.5em;
        padding-left: 2vw;
        padding-right: 2vw;
        border: 1px solid #ebebeb;
        border-radius: 8px;
    }
    button {
        margin-bottom: 1em;
        margin-left: 6.5vw;
        margin-right: 6.5vw;
        padding: .5em;
        background-color: #00f5d4;
        border: 1px solid #00f5d4;
        font-size: 16px;
        border-radius: 20px;
        color: white;
        font-weight: bold;
        opacity: 5;
        transition: 0.7s;
    }
    button:hover {
      background-color: #f4d301;
      border: 1px solid #f4d301;
      color: white;
      font-weight: bolder;
      opacity: 3
    }
    .link {
      color: #005c7a;
      font-size: 15px;
    }
`


function Login() {

  return (
    <Styles>
      <form>
          <div className="container">
          <h3>LOG INTO YOUR ACCOUNT</h3>
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
            <Link className="link" to='/signup'>Don't have an account? Sign up!</Link>
           </div>  
           <Route path='/signup'component={Signup}/>
      </form>
    </Styles>
  )

}


export default Login;