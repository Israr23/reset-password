import axios from 'axios'
import React, { useState } from 'react'
import Reset from '../reset-password/resetPassword'
import Signin from '../sign-in/signin'

export default function Signup() {
const [credential, setCredential] = useState({
  email: '',
  password: '',
  flag: false,

})
const [resetPass, setResetPass] = useState(false)

const handleChange = e =>{
  const {name,value} = e.target
  setCredential({
  ...credential,
  [name]:value
  })
  }
  const register = async  (event)=>{
event.preventDefault()


console.log(credential)
await axios.post("http://localhost:4000/api/post", credential).then(res=>{alert(res.data.msg);
console.log(res)
if(res.data.statusCode === 200){
  setResetPass(true)
  localStorage.setItem("auth-token", res.data.token);
  
}
}

)


  }




  return (
    !resetPass ?<div className='all-form'>
   
    <form>
    <h1>Registration</h1>
    <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required onChange={handleChange} value={credential.email}/>
    <br/>
        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} value={credential.password}/>
      <br/>
    <button style={{backgroundColor: "blue"}} onClick={register}>Sign up</button>
    
    <h5  style={{cursor: "pointer"}} onClick={()=>setResetPass(true)
}>Already have an account ? Sign in here...</h5>
    
    </form>

  
        </div>: 
        <Signin/>
  )
}
