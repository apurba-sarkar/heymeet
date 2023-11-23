// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import {Routes,Route} from "react-router-dom"
import RoomPage from "./Pages/RoomPage";

function App() {
  return <div className="App">

<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/room/:roomId" element={<RoomPage/>}/>
</Routes>

  </div>;
}

export default App;
