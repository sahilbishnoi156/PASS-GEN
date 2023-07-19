import React,{useEffect, useRef} from 'react'
import gsap from 'gsap';
import '../Components/css/Service.css';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const headingRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(headingRef.current,{
      opacity:0,
      y:200
    },{
      opacity:1,
      y:0,
    })
  },[])
  return (
    <div id='service-div'>
      <div id='move'></div>
      <h1 ref={headingRef}>This is services</h1>
    </div>
  )
}
