import React from "react";

import Skill from "./Skill";

export default function Hobby() {
  return (
    <div className="bg-dark d-flex flex-column text-warning" style = {{height:"100vh"}}>
      <div className="d-flex flex-column justifiy-content-center align-items-center  ">
        <img
          className="rounded-circle border border-4 border-warning picsize m-3"
          src="/images/face.jpg"
        ></img>

        <h3 className="fs-2 fw-bold" style = {{color:"#8833ff"}}>Peera Aronrat</h3>

        <p className="fs-5">
          I am a university student who interested in coding.Currently studying
          computer engineering.
        </p>
      </div>
      <Skill/>
     
    
      
      
    </div>
  );
}
