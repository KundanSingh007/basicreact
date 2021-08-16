import React from "react";
import bigPhone from "./bigphone.png";

function header() {
  return (
    <div id="split">
      <div className="branding">
        <h1 id="cente">Company</h1>
      </div>

      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Account</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>
            <button id="get__started">Get Started</button>
          </li>
        </ul>
      </nav>
      <div className="big__phone">
        <img src={bigPhone} alt="" />
      </div>
    </div>
  );
}

export default header;
