import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Content/Home/Home";
import Trip from "./components/Content/Trip/Trip";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/trip" element={<Trip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
