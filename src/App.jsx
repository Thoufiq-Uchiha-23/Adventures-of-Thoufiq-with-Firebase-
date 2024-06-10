import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";

const auth = getAuth(app);

function App() {
  const signupUser = () => {
    // createUserWithEmailAndPassword(auth, email, password)
    createUserWithEmailAndPassword(
      auth,
      "thoufiqizhar022@gmail.com",
      "THOUFIQizhar@022"
    ).then((value) => console.log(value));
  };

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
