import axios from 'axios'
import React, { useState } from 'react'

export default function Reset() {
const [password, setPassword] = useState({
  oldPass: '',
  newPass: '',


})


const handleChange = e =>{
  const {name,value} = e.target
  setPassword({
  ...password,
  [name]:value
  })
  }


  const resetPassword = async (event)=>{
    event.preventDefault()
    console.log(password)
   let id = localStorage.getItem('id');
   console.log(id, password)
   if(password.newPass === '' && password.oldPass === ''){
    alert("please fill up all the fields!!")
   }
   else{
    await axios.patch(`http://localhost:4000/api/update-password/${id}`, password ).then(res=>{alert(res.data.msg); console.log(res);
    if(res.data.statusCode === 200){
     window.location.reload(false);
   }})
   }
    
  }



  return (
   <div className='all-form'>
   
          <form>
          <h1>Reset Password</h1>
          <label for="oldPass"><b>Current Password</b></label>
        <input type="password" placeholder="Enter old password" name="oldPass" required onChange={handleChange} value={password.oldPass}/>
    <br/>
        <label for="newPass"><b>New Password</b></label>
        <input type="password" placeholder="Enter new Password" name="newPass" required onChange={handleChange} value={password.newPass}/>
      <br/>
    <button onClick={resetPassword}>Reset</button>
    
    
    
    </form>
        </div>
  )
}
