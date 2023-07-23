import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "./Components/css/Navbar.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Password from "./Components/Password";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manager from "./Components/Manager";
import Checker from "./Components/Checker";

export default function App() {
  const [progress, setProgress] = useState(0);
  const navRef = useRef();

  // Gsap animations
  useEffect(() => {
    const showNav = gsap.fromTo(
      navRef.current,{
        background:"#423030c1"
      },{
        background:"transparent",
        duration:0.4
      }
    ).progress(1)
    ScrollTrigger.create({
      start:"top top",
      end:"max",
      onUpdate: (self)=>{
        self.direction === -1?
        showNav.play():
        showNav.reverse()
      }
    })
  }, []);
  return (
    <Router>
      <div id="main-div">
        <div id="top-navbar" ref={navRef}>
          <LoadingBar color="#f11946" progress={progress} height={3} />
          <Navbar setProg={setProgress} />
        </div>
        <div id="main-body">
          <Routes>
            <Route path="/PASS-GEN/" element={<Home setProg={setProgress} />} />
            <Route exact path="/" element={<Home setProg={setProgress} />} />
            <Route exact path="/PASS-GEN/generatepassword" element={<Password setProg={setProgress}/>} />
            <Route exact path="/PASS-GEN/about" element={<About setProg={setProgress}/>} />
            <Route exact path="/PASS-GEN/services" element={<Services setProg={setProgress}/>} />
            <Route exact path="/PASS-GEN/projects" element={<Projects setProg={setProgress} />} />
            <Route exact path="/PASS-GEN/managepassword" element={<Manager setProg={setProgress} />} />
            <Route exact path="/PASS-GEN/checkpassword" element={<Checker setProg={setProgress} />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}