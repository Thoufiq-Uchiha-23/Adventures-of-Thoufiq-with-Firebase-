import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const SigninPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Signin Page</h1>
            <label>Enter your email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email here" />
            <label>Enter your password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password here" />
            <button>Sign me in</button>
        </div>
    )
}

export default SigninPage