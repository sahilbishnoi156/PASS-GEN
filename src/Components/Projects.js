import React, { useState } from "react";

export default function Projects() {
  // Initialize an array of true values for each project
  const [showDescArr, setShowDescArr] = useState(Array(5).fill(true));

  const ProjectItem = (props) => {
    const handleShowDes = () => {
      // Toggle the showDesc value for the clicked project
      const updatedShowDescArr = [...showDescArr];
      updatedShowDescArr[props.id - 1] = !updatedShowDescArr[props.id - 1];
      setShowDescArr(updatedShowDescArr);
    };

    return (
      <div className="card col-sm-5 p-0" id={props.id}>
        <div className="card-header">{props.feature}</div>
        <div className="card-body d-flex align-items-start justify-content-between flex-column gap-2">
          <h5 className="card-title m-0">{props.title}</h5>
          <div
            className="d-flex align-items-center justify-content-between w-100"
            onClick={handleShowDes}
            style={{cursor:"pointer"}}
          >
            <p className="card-text m-0">
              {showDescArr[props.id - 1]
                ? props.description.slice(0, 40) + "....."
                : props.description}
            </p>
            <span className="material-symbols-outlined position-sticky" >
            {showDescArr[props.id - 1]
                ? "arrow_drop_down"
                : "arrow_drop_up"}
            </span>
          </div>
          <a
            href={props.url}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Check Project
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="container p-4">
      <div id="projects-div" className="row d-flex gap-4 justify-content-evenly">
        <ProjectItem
          title="SG-MEDIA"
          feature="Feature - html, css, js"
          description="Front-end replica with animations and fully responsiveness"
          url="https://sahilbishnoi156.github.io/SG-MEDIA/"
          id={1}
        />
        <ProjectItem
          title="iNotebook"
          feature="Feature - MERN APPLICATION"
          description="Fully functional app to store your notes "
          url="https://github.com/sahilbishnoi156/iNotebook"
          id={2}
        />
        <ProjectItem
          title="PASS-GEN"
          feature="Feature - React, bootstrap"
          description="Generate strong password and store them in our database"
          url="https://sahilbishnoi156.github.io/PASS-GEN/"
          id={3}
        />
        <ProjectItem
          title="TEXT-TUTILS"
          feature="Feature - React, bootstrap, GSAP"
          description="Text manipulation word, character counter, convert upper/lowercase, extract number, email etc..."
          url="https://sahilbishnoi156.github.io/Texttutils/"
          id={4}
        />
        <ProjectItem
          title="News-Monkey"
          feature="Feature - React, bootstrap, News-Api"
          description="Fetch any news category anytime, anywhere you want."
          url="https://github.com/sahilbishnoi156/News-Monkey/"
          id={5}
        />
      </div>
    </div>
  );
}
