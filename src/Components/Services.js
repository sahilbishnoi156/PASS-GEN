import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../Components/css/Service.css";
import { useNavigate } from "react-router-dom";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

export default function Services(props) {
  const navigate = useNavigate();
  const handleExploreClick= (id)=>{
      props.setProg(0);
      setTimeout(() => {
        props.setProg(100)
        id===1?navigate('/PASS-GEN/generatepassword'):id===2?navigate('/PASS-GEN/managepassword'):navigate('/PASS-GEN/checkpassword');
      }, 500);
  }
  const GettingStarted = () =>{
    return(
      <div id="explore" >
        Explore
        <span className="material-symbols-outlined">
          arrow_right_alt
        </span>
      </div>
    )
  }
  const headingRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);
  return (
    <div id="service-div">
    <div id="service-div-inner">
      <div id="service1" className="services">
        <h1>Password Generator</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi blanditiis quo non voluptates quis et, quam laboriosam impedit sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam in dignissimos esse, non labore provident molestias eligendi ipsam quas!</p>
        <div id="explore-outer" onClick={()=>handleExploreClick(1)}><GettingStarted/></div>
      </div>
      <div id="service2" className="services">
        <h1>Password Manager</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi blanditiis quo non voluptates quis et, quam laboriosam impedit sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam in dignissimos esse, non labore provident molestias eligendi ipsam quas!</p>
        <div id="explore-outer" onClick={()=>handleExploreClick(2)}><GettingStarted/> </div>
      </div>
      <div id="service3" className="services">
        <h1>Password Checker</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quasi blanditiis quo non voluptates quis et, quam laboriosam impedit sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam in dignissimos esse, non labore provident molestias eligendi ipsam quas!</p>
        <div id="explore-outer" onClick={()=>handleExploreClick(3)}><GettingStarted/> </div>
      </div>
    </div>
    </div>
  );
}
