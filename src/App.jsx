import { app } from "./firebase";
import { useState, useEffect } from "react";
import "./App.css";
import Signup from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, you are logged in
        setUser(user);
      } else {
        // User is logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <Signup />
        <SigninPage />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
export default App;
