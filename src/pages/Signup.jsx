import React from 'react'

const Signup = () => {
  return (
    <div className='signup-page'>
        <label>Email</label>
        <input type="email" placeholder='Enter your email here' />
        <label>Password</label>
        <input type="password" placeholder='Enter your password here' />
        <button>Sign Up</button>
    </div>
  )
}

export default Signup