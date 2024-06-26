import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
    // Success
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
  }

  return (
    <div className="signup-page">
      <h1>Sign Up Page</h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your email here"
      />
      <label>Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter your password here"
      />
      <button onClick={signupWithGoogle}>Sign in with Google</button>
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default Signup;
