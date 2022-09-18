import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
export default function Experience() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div style={{ color: "#8833ff" }} class="gap-5 vh-100">
        <p className="fw-bold fs-1 text-center">Experience</p>
        <div>
          {/* <!-- task card1 --> */}
          <div className="d-flex flex-row d-grid gap-4 justify-content-center">
            {/* <!-- pic1 --> */}

            <img src="/images/carin.png" alt="image" className="ko" style = {{width:"450px",height:"250px"}}></img>

            <div>
              {/* <!-- text1 --> */}
              <h2 className = "fw-bold fs-3">Virus Game</h2>
              <p style = {{color:"#ff8000"}} >
                I used to design ux/ui with figma in oop class and make the
                webpage using React.
                <br></br>
                it is a final gameproject called "CARIN" a virus game.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- task card2 --> */}
        <div className="d-flex flex-columm justify-content-center gap-5 p-4">
          <img
            src="/images/10-Yugioh-Exodia-Forbidden-One-Incarnate-Necross-Defender-OTK.jpg"
            alt="image"
            className=""
            style = {{width:"450px",height:"250px"}}
          ></img>

          <div>
            <h2 className = "fw-bold fs-3">Card Game</h2>
            <p style = {{color:"#ff8000"}}>
              I used to design visual effects and cards in c++ in a computer
              programming class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
