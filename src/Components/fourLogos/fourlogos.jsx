import React from "react";
import "./fourlogos.css";
import bag from "./bag.png";
import bank from "./bank.png";
import chart from "./chart.png";
import phone from "./phone.png";

function fourlogos() {
  return (
    <div>
      <img src={bag} alt="" />
      <img src={bank} alt="" />
      <img src={chart} alt="" />
      <img src={phone} alt="" />
    </div>
  );
}

export default fourlogos;
