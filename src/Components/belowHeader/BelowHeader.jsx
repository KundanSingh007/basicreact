import React from "react";
import "./BelowHeader.css";
import bigphone from "./bigphone.png";

function BelowHeader() {
  return (
    <div>
      <img src={bigphone} alt="" />
      <div className="bye">
        <div className="container">
          <h6>Bye bye bank fees,hello world.</h6>
          <h1>Now, you're in business</h1>
          <p>
            Online education is approachable in many ways,but students often
            neglect the fact that it is much more economical.
          </p>
        </div>
        <button id="get__started">Get Started</button>
      </div>
    </div>
  );
}

export default BelowHeader;
