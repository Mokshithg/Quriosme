import React from 'react'

function Success ({user}){
  return (
    <div className='success-page'>
       <h1>Welcome back, {user.name}</h1> 
       <p>You have successfully logged in.</p>
    </div>
  )
}

export default Success