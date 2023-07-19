import React, { useState } from "react";
import logoImage from '../logo-img.jpg';
import LoadingBar from "react-top-loading-bar";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    props.setProg(0);
    setRotation(prevRotation => prevRotation + 360);
    setTimeout(() => {
      props.setProg(100);
    }, 0);
  };

  const handleLogoClick = () => {
    props.setProg(0);
    setRotation(prevRotation => prevRotation + 360);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <nav>
      <div id="logo">
        <img
          src={logoImage}
          alt="Logo"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleLogoClick}
        />
      </div>
      <div id="navigation">
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/crew" onClick={handleClick}>
              Crew
            </Link>
          </li>
        </ul>
      </div>
      {/* Add LoadingBar component here */}
      <div>
        <LoadingBar color="#f11946" progress={props.progress} height={3} />
      </div>
    </nav>
  );
}
