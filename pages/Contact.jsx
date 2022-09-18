import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { IconBrandFacebook, IconMail, IconPhone, TablerIcon } from "@tabler/icons";
export default function Contact() {
  return (
    <div className="bg-dark d-flex flex-column vh-100">
      {/* navbar */}
      <Navbar />

      {/* contact section */}
      {/* header */}
      <h2 className="fw-bold fs-1 text-center p-5" style={{ color: "#8833ff" }}>
        Contact Me
      </h2>
      {/* contact container */}
      <div className="d-flex flex-start justify-content-center ">
        {/* image */}
        <div className="d-flex flex-row gap-5 rounded-4 rgbbox">
          <img 
            className ="selfpicborder "
            src="/images/face.jpg"
            alt="image"
            height="250"
            width="250"
          ></img>
        {/* detail div*/}
          <div className="vstack justify-content-center fw-bold fs-4"  >
            <p>Name: Peera Aronrat</p>
            <p>Nickname: Ra</p>
            <p>
              <IconMail/>:{" "}
              <a href="mailto:peera_aronrat@cmu.ac.th">
                peera_aronrat@cmu.ac.th
              </a>
            </p>
            <p>
              <IconBrandFacebook/>:{" "}
              <a
                href="https://www.facebook.com/r.a102333333333"
                targert="_blank"
                rel="noneferrer"
              >
                https://www.facebook.com/r.a102333333333
              </a>
            </p>
            <p><IconPhone/>: 096-6798585</p>
          </div>
        </div>
      </div>
      {/* box end */}
    </div>
  );
}
