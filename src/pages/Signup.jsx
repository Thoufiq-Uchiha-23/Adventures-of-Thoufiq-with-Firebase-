import React, {useState} from 'react'
import { getAuth } from 'firebase/auth'

const auth = getAuth(app)

const Signup = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")

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