import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";
import Add from "./Components/Add/Add";
import "bootstrap/dist/css/bootstrap.css";
import Update from "./Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LoginSignup} />
        <Route exact path="/LoginSignup" Component={LoginSignup} />
        <Route exact path="/Add" Component={Add} />
        <Route exact path="/edit/:id" Component={Update}/>
      </Routes>
    </Router>
  );
}

export default App;
