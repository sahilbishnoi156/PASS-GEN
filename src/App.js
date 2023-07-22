import React, { useState } from "react";
import "./App.css";
import "./Components/css/Navbar.css";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Password from "./Components/Password";
import Crew from "./Components/Crew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <div id="main-div">
        <div id="top-navbar">
          <LoadingBar color="#f11946" progress={progress} height={3} />
          <Navbar setProg={setProgress} />
        </div>
        <div id="main-body">
          <Routes>
            <Route path="/PASS-GEN/" element={<Home setProg={setProgress} />} />
            <Route exact path="/" element={<Home setProg={setProgress} />} />
            <Route exact path="/generatepassword" element={<Password setProg={setProgress}/>} />
            <Route exact path="/about" element={<About setProg={setProgress}/>} />
            <Route exact path="/services" element={<Services setProg={setProgress}/>} />
            <Route exact path="/crew" element={<Crew setProg={setProgress} />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}