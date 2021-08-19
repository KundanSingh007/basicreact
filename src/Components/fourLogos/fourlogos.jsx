import React from "react";
import "./fourlogos.css";
import bag from "./bag.png";
import bank from "./bank.png";
import chart from "./chart.png";
import phone from "./phone.png";

function Fourlogos() {
  return (
    <div className="container">
      <h6>Smart business</h6>
      <h3>Core Business Motives</h3>
      <p>
        Online education is approachable in many ways,but students often neglect
        the fact that it is much more economical.
      </p>

      <div className="container">
        <div className="item">
          <img src={bag} alt="" />
          <h6>Fast & Secure</h6>
          <p>
            But Students often neglects the fact that it is much more economical
            than.
          </p>
        </div>
        <div className="item">
          <img src={bank} alt="" />
          <h6>Transaction reports</h6>
          <p>
            But Students often neglects the fact that it is much more economical
            than.
          </p>
        </div>
        <div className="item">
          <img src={chart} alt="" />
          <h6>Cash at ATMs globally</h6>
          <p>
            But Students often neglects the fact that it is much more economical
            than.
          </p>
        </div>
        <div className="item">
          <img src={phone} alt="" />
          <h6>Saving vault</h6>
          <p>
            But Students often neglects the fact that it is much more economical
            than.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fourlogos;
