import React from "react";
import "./atm.css";
import visas from "./visacard.png";

function Atm() {
  return (
    <div id="atm">
      <h6 id="cente">Sign up in minutes</h6>
      <h1>Fast accounting opening</h1>
      <p>
        Online education is approachable in many ways,but students often neglect
        the fact that it is much more economical.
      </p>
      <button id="get__started">Get Started</button>
      <img src={visas} alt="" />
    </div>
  );
}
export default Atm;
