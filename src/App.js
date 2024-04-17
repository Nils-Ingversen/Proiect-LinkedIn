import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyNetwork from "./pages/My-network";
import Login from "./pages/Log-in";
import "./App.css";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <div className="tot">
      <Routes>
        <Route index path="/log-in" element={<Login />}></Route>
        <Route index path="/home" element={<Home />}></Route>
        <Route index path="/my-network" element={<MyNetwork />}></Route>
        <Route index path="/jobs" element={<Jobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
