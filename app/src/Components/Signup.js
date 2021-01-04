import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';


const Style = styled.div `
    form {
        font-size: 20px;
    }
    .wrapper {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        background-color: #f7f7f7;
        margin-top: 5%;
        margin-left: 33vw;
        margin-right: 33vw;
        padding-bottom: 2.5em;
        border: 1px solid  #ebebeb;
        box-shadow: 2px 3px 10px 5px #888888;
        
    }
    h2 {
        color: #002925;
    }
    .container {
        margin: 1em;
    }
    button {
        padding-top: 1em;
        padding-bottom: 1em;
        margin-left: 10vw;
        margin-right: 10vw;
        margin-top: 1em;
        font-size: 13px;
        background-color: #00f5d4;
        border: 1px solid #00f5d4;
        border-radius: 20px;
        font-weight: bold;
        color: white;
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
    input{
        padding: 1em;
        padding-left: 4vw;
        padding-right: 4vw;
        border: 1px solid #ebebeb;
        border-radius: 8px;
    }
    .link {
        font-size: 16px;
    }
    
`

function Signup() {



    return(
      <Style> 
       <form>
           <div className="wrapper">
               <h2>Create Your Account</h2>
               <div className="container">
                <label htmlFor="username"></label>
                  <input 
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                />
               </div>
               <div className="container">
                   <label htmlFor="email"></label>
                   <input 
                    id="email"
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    />
               </div>
               <div className="container">
                   <label htmlFor="dob"></label>
                   <input 
                    id="dob"
                    name="dob"
                    type="date"
                    />
               </div>
               <div className="container">
                   <label htmlFor="password"></label>
                    <input
                     id="password"
                     name="password"
                     type="text"  
                     placeholder="Password"
                    />              
               </div>
               <Link className="link" to="/login" >Already have an account? Log in!</Link>
               <button>Sign Up</button>
           </div>
       </form>
      </Style>  
    )
}


export default Signup;