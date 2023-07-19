import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import backgroundImg from '../naruto-background.png';
import { useNavigate } from "react-router-dom";
import "../getting-started-image.png";
import '../Components/css/Home.css'

export default function PageContent(props) {
  const navigate = useNavigate();
  const arrowRef = useRef(null);
  const imgRef = useRef(null);
  const strDivRef = useRef(null);

  async function startedClick() {
    props.setProg(0);
    console.log(strDivRef.current)
    arrowRef.current.style.transform = " scale(1.8) translateX(100px)";
    setTimeout(() => {
      props.setProg(100);
      navigate(`/password`);
    }, 400);
  }
  useEffect(() => {
    gsap.fromTo(strDivRef.current,{
      opacity:0,
      scale:.2
    },{
      opacity:1,
      scale:1
    })
    gsap.fromTo(imgRef.current,{
      opacity:0,
      y:100
    },{
      opacity:1,
      y:0,
    })
  },[])
  return (
    <div id="home-div-outer">
      <div id="home-heading">
        <div id="top-heading-div">
        <span>P</span>
        <span>ass</span>
        <span>G</span>
        <span>en</span>
        </div>
        <p ref={strDivRef}>Unlock the realm of strong and secure passwords with our innovative React app, your ultimate password generator companion. Stay protected effortlessly!</p>
      </div>
      
      <img src={backgroundImg} alt="" id="background-img" ref={imgRef}/>
      <div id="started-div-btn" onClick={startedClick}>
        Getting started
        <span className="material-symbols-outlined" ref={arrowRef}>
          arrow_right_alt
        </span>
      </div>
    </div>
  );
}
