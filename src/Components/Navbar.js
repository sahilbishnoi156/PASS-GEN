import React, { useState, useRef } from "react";
import logoImage from './assets/logo-img.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const [rotation, setRotation] = useState(0);
  const [nav, setNav] = useState(false)
  const navigationRef = useRef(null);
  const navigate = useNavigate();

  
  const handleClick = () => {
    // Get the current window width
    const windowWidth = window.innerWidth;
    props.setProg(0);
    setTimeout(() => {
      props.setProg(100);
    }, 100);
    setRotation(prevRotation => prevRotation + 360);
    // Check if the screen width is less than 450
    if (windowWidth < 450) {
      if (!nav) {
        navigationRef.current.style.transform = "translateX(0)";
        setNav(true);
      } else {
        navigationRef.current.style.transform = "translateX(-100%)";
        setNav(false);
      }
    }
  };
  const handleLogoClick = () => {
    props.setProg(0);
    setRotation(prevRotation => prevRotation + 360);
      setTimeout(() => {
        props.setProg(100);
        navigate('/PASS-GEN/')
      }, 500);
  };
  const handlesLogoClick = () => {
    props.setProg(0);
    setRotation(prevRotation => prevRotation + 360);
      setTimeout(() => {
        props.setProg(100);
        navigate('/PASS-GEN/')
      }, 500);
    if (!nav) {
      navigationRef.current.style.transform = "translateX(0)";
      setNav(true);
    }
    else {
      navigationRef.current.style.transform = "translateX(-100%)";
      setNav(false);
    }
  };
  
  const handleMenuClick = () => {
    if (!nav) {
      navigationRef.current.style.transform = "translateX(0)";
      setNav(true);
    }
    else {
      navigationRef.current.style.transform = "translateX(-100%)";
      setNav(false);
    }
  };
  return (
    <nav>
      <div className="logo">
        <img
          src={logoImage}
          alt="Logo"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleLogoClick}
        />
      </div>
      <div className="navigation" id="nav-bar" ref={navigationRef}>
        <ul>
          <li id="special-li">
          <img
          src={logoImage}
          alt="Logo"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handlesLogoClick}
        />
          </li>
          <li>
            <Link to="/PASS-GEN/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/PASS-GEN/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/PASS-GEN/services" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/PASS-GEN/projects" onClick={handleClick}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <div id="menu-icon">
      <span className="material-symbols-outlined" onClick={handleMenuClick} >menu</span>
      </div>
    </nav>
  );
}
