import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';


const Style = styled.div `
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        background-color: #f7f7f7;
        margin-left: 35vw;
        margin-right: 35vw;
        border: 1px solid  #ebebeb;
        box-shadow: 2px 3px 10px 5px #888888;
        
    }
    .container {
        margin: 5rem;
    }
    button {
        padding: 10px;
        background-color: #00f5d4;
        border: 1px solid #00f5d4;
        border-radius: 20px;
        color: white;
    }
`

function Signup() {

    return(
      <Style> 
       <form>
           <div className="wrapper">
               <div className="container">
                <label htmlFor="name"> Name </label>
                  <input 
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                />
               </div>
               <div className="container">
                   <label htmlFor="password"> Password </label>
                    <input
                     id="password"
                     name="password"
                     type="text"  
                     placeholder="Password"
                    />              
               </div>
               <div className="container">
                   <label htmlFor="reenter"> Re-enter Password </label>
                    <input
                     id="reenter"
                     name="reenter"
                     type="text"   
                     placeholder
                    />              
               </div>
               <button>Sign Up</button>
           </div>
       </form>
      </Style>  
    )
}


export default Signup;