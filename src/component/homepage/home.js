import React, { useState } from 'react'
import Reset from '../reset-password/resetPassword'

export default function Home() {
    const [resetPass, setResetPass] = useState(false)

  return (
    <div>
        <h1 className='title-home'>Home</h1>

       {!resetPass ?  <h3 className='title-home'  style={{cursor: "pointer"}} onClick={()=> setResetPass(true)}>Click here to reset password...</h3>:
       <Reset/>}
    </div>
  )
}
