import React from "react";
import "./Atm.css";
import visas from "./visacard.png";

function Atm() {
  return (
    <div id="f_container">
      <div className="f_item">
        <h5>Sign up in minutes</h5>
        <h2>Fast accounting opening</h2>
        <p>
          Online education is approachable in many ways, but students often
          neglect the fact that it is much more economical than a traditional
          campus degree.
        </p>
        <div className="button">
          <button id="get__started">Get Started</button>
        </div>
      </div>
      <div className="f_photo">
        <img className="photos" src={visas} alt="visas" />
      </div>
    </div>
  );
}

export default Atm;
