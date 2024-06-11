import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase"

const auth = getAuth(app)

const SigninPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => console.log("Signin success"))
        .catch(err =>  console.log(err))
    }

    return (
        <div>
            <h1>Signin Page</h1>
            <label>Enter your email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email here" />
            <label>Enter your password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password here" />
            <button onClick={signinUser}>Sign me in</button>
        </div>
    )
}

export default SigninPage