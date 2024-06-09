import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import './App.css'

const db = getDatabase(app)

function App() {
   const putData = () => {
    // set(ref(database, path), {object})
    set(ref(db, "users/thoufiq"), {
      id: 1,
      name: "Thoufiq",
      age: 21,
    })
   }  

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  )
}

export default App
