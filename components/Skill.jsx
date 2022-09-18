import { IconChevronRight } from "@tabler/icons";
import React from "react";

import { IconArrowNarrowRight } from "@tabler/icons";

export default function Skill() {
  return (
    <div className="d-flex flex-row justify-content-evenly  skilltext ">
      {/*  left*/}
      <div className="d-flex flex-row ">
        <div className="rounded">
          <img
            className="picsize2"
            src="/images/programminglaguagepic.png"
          ></img>
        </div>
        <div>
         
          <div className="d-flex flex-column align-items-center">
          <h3 className="fw-bold">Programming skills</h3>
            <p><IconChevronRight/>JAVA Intermidiate</p>
            <p><IconChevronRight/>C++ Intermidiate</p>
            <p><IconChevronRight/>HTML/CSS Intermidiate</p>
            <p><IconChevronRight/>PYTHON Intermidiate</p>
            <p><IconChevronRight/>C# Beginner</p>
          </div>
        </div>
      </div>
      {/* left end */}

      {/*right */}
      <div className="d-flex flex-row gap-5 ">
        <div className="rounded">
          <img className="picsize2" src="/images/hobbypic.jpg"></img>
        </div>
        <div>
       
          <div className="d-flex flex-column align-items-center">
          <h3 className="fw-bold">Hobby</h3>
            <p><IconChevronRight/>Running</p>
            <p><IconChevronRight/>Read comic book</p>
            <p><IconChevronRight/>Study</p>
            <p><IconChevronRight/>Swimming</p>
         
          </div>
        </div>
      </div>
      {/* right end */}
    </div>
  );
}
