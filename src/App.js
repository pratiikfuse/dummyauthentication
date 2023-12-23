import "./App.css";
import Details from "./components/Details.js";
import Login from "./components/Login.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/details" Component={Details}></Route>
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
