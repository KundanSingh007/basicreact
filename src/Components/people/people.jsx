import React from "react";
import "./people.css";
import peopleImage from "./fourguys.png";

function People() {
  return (
    <div className="container">
      <div className="card">
        <h6>Part of our generation business</h6>
        <h3>Your business, your language</h3>
        <p>
          Online education is approachable in many ways,but students often
          neglect the fact that it is much more economical.
        </p>
        <button id="get__started">Get Started</button>
      </div>
      <div className="card">
        <img src={peopleImage} alt="peopleImage" />
      </div>
    </div>
  );
}

export default People;
