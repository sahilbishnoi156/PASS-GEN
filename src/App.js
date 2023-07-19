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
            <Route path="/Password-Generator" element={<Home setProg={setProgress} />} />
            <Route exact path="react-proj1/" element={<Home setProg={setProgress} />} />
            <Route exact path="/password" element={<Password/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/crew" element={<Crew />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}
// gsap.from('#pass-heading',{

// })
