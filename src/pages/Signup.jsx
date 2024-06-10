import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)

const Signup = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("")

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
  }

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