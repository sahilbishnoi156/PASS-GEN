import React, { useState, useRef, useEffect } from "react";
import luffBac from "./assets/luffy-background.png";
import "../Components/css/Password.css";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

export default function Password(props) {
  // const navigate = useNavigate();
  const passInputRef = useRef(null);
  const luffRef = useRef(null);
  const divRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const togglePop = useRef(null);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [visibilityIcon, setVisibilityIcon] = useState("visibility_off");
  const clipboard = navigator.clipboard;

  const generatePassword = (length = 8) => {
    toast.success('Password Generated !', {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    props.setProg(0);
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setTimeout(() => {
      props.setProg(100);
      setGeneratedPassword(password);
    }, 400);
  };
  const handleCopy = () => {
    togglePop.current.style.opacity = 1;
    togglePop.current.style.transform = "translateY(-50px)";
    setTimeout(() => {
      togglePop.current.style.opacity = 0;
      togglePop.current.style.transform = "translateY(0px)";
    }, 1000);
    clipboard.writeText(`${generatedPassword}`);
  };
  const handleVisibility = () => {
    if (visibilityIcon === "visibility") {
      passInputRef.current.type = "password";
      setVisibilityIcon("visibility_off");
    } else {
      passInputRef.current.type = "text";
      setVisibilityIcon("visibility");
    }
  };

  useEffect(() => {
    gsap.fromTo(
      luffRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
    gsap.fromTo(
      btnRef.current,
      {
        opacity: 0,
        width: 0,
      },
      {
        opacity: 1,
        width: 1,
      }
    );
    gsap.fromTo(
      divRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
  }, []);
  return (
    <div id="password-div-outer">
      <div id="password-div-heading">
        <div ref={headingRef} id="top-heading">
          Generate A Strong Password Now :
        </div>
        <div id="top-heading-content">
          <p id="top-heading-content-inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ut qui et molestias. Tempore, quas ullam sit modi aperiam dolore
            beatae molestiae.
          </p>
        </div>
      </div>
      <div id="password-container">
        <form id="password-form" ref={divRef}>
          <label htmlFor="password-div-input">
            Password:
            <input
              type="password"
              value={generatedPassword}
              disabled
              ref={passInputRef}
              id="password-div-input"
            />
          </label>

          <div id="icons-div">
            <span
              className="material-symbols-outlined"
              onClick={handleVisibility}
            >
              {visibilityIcon}
            </span>
            <div id="toggle-pop" ref={togglePop}>
              Copied to clipboard
            </div>
            <span className="material-symbols-outlined" onClick={handleCopy}>
              content_copy
            </span>
          </div>
        </form>

        <div id="password-div-btns">
          <div
            id="generate-btn"
            className="password-div-btn"
            onClick={generatePassword}
          >
            <span>Generate</span>
          </div>
        </div>
      </div>

      <img src={luffBac} alt="not found" ref={luffRef} id="luffy-image" />
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{width:"70vw"}}
      />
    </div>
  );
}
