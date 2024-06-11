import { app } from "./firebase";
import "./App.css";
import Signup from "./pages/Signup";
import SigninPage from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <Signup />
      <SigninPage />
    </div>
  );
}

export default App;
