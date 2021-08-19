import React from "react";
import "./cents.css";
import centeLogo from "./centelogo.png";

function Cente() {
  return (
    <div className="container">
      <div className="card">
        <img src={centeLogo} alt="" />
      </div>
      <div className="card">
        <h6>Best savings on international transfer</h6>
        <h1>Smartway to look after your business transaction</h1>
        <p>
          Online education is approachable in many ways,but students often
          neglect the fact that it is much more economical.
        </p>
        <button id="get__started">Get Started</button>
      </div>
    </div>
  );
}

export default Cente;
