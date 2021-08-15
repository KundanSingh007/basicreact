import React from "react";
import "./Flexbox.css";

function Flexbox() {
  return (
    <div className="flex__container">
      <div className="flex__item">
        <button>Home</button>
        <button>Account</button>
        <button>Features</button>
        <button>Pricing</button>
        <button>Get Started</button>
      </div>
      <div className="span">
        <span>
          <h2>Cente</h2>
        </span>
      </div>
    </div>
  );
}

export default Flexbox;
