import React, { useState } from 'react'

import {  Link } from 'react-router-dom';

function Main() {

const [isSignUp, setIsSignUp]=useState(false)

  return (
 
    !isSignUp && 		<div >
      <div style={{backgroundColor: "#D5F5E3", height: "80px"}}></div>
     <div className='list'>
     <h1 style={{color: "black", paddingTop: "50px", fontSize: "40px"}} className='title-home'>User Management Sytem</h1>
        <ul className="App-header">
    
    <li onClick={()=>setIsSignUp(true)}>
        <a href="/admin-signup">
<div className='options'>Admin Sign Up</div>

        </a>
    </li>
    <li onClick={()=>setIsSignUp(true)}>
        <div className='options'><a href="/user-signup">User Sign Up</a></div>
    </li>
    </ul>
     </div>
    <div style={{backgroundColor: "#D5F5E3", height: "200px", marginTop: "300px"}}></div>

    </div>
  )
}

export default Main