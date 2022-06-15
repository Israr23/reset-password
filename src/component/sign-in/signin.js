import axios from 'axios'
import React, { useState } from 'react'
import Home from '../homepage/home'


export default function Signin() {
const [credential, setCredential] = useState({
  email: '',
  password: '',
  flag: true,

})
const [resetPass, setResetPass] = useState(false)
const [message, setMessage] = useState('')
const handleChange = e =>{
  const {name,value} = e.target
  setCredential({
  ...credential,
  [name]:value
  })
  }

  const login = async  (event)=>{
event.preventDefault()


console.log(credential)

await axios.get("http://localhost:4000/api/getAll").then(res=>

{
    if(res.status === 200  ){
        console.log(res)
        res.data.map((item)=>{
          
            if( item.email=== credential.email && item.password === credential.password){
         
                localStorage.setItem('id', item.id);
                setResetPass(true)
            }
            else{
              setMessage("invalid email or password")
              
            }
        })
        
    }
}
)



  }




  return (
    !resetPass ?<div className='all-form'>
    
    <form>
    <h1>Login</h1>
    <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange} value={credential.email}/>
    <br/>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} value={credential.password}/>
      <br/>
    <button onClick={login}>Sign in</button>
    
    <div style={{color: "red"}}>{message}</div>
    
    </form>
  
 
        </div>: 
        <Home/>
  )
}
