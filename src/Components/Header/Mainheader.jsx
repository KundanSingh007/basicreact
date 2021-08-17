import React from "react";
import "./header.css";

function Mainheader() {
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
    </div>
  );
}

export default Mainheader;
