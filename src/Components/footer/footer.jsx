import React from "react";
import "./footer.css";
import social from "./5social.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="row">
          {/*Column1*/}
          <div className="col">
            <h2>Cente</h2>
            <ul className="list-unstyled">
              <li>
                <p>A true business Companion.</p>
              </li>
              <li>
                <h4>Social</h4>
              </li>
              <li>
                <img src={social} alt="" />
              </li>
            </ul>
          </div>

          {/*Column2*/}
          <div className="col">
            <h4>Features</h4>
            <ul className="list-unstyled">
              <li>Engagement</li>
              <li>Retention</li>
              <li>Funnels</li>
            </ul>
          </div>
          {/*Column3*/}
          <div className="col">
            <h4>Resources</h4>
            <ul className="list-unstyled">
              <li>Enterprise</li>
              <li>SaaS</li>
              <li>Financial Services</li>
              <li>Consumer Tech</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui
            ullam sequi, praesentium animi exercitationem nostrum. Sequi iure
            voluptatem blanditiis ab! Fuga repellendus perspiciatis dignissimos
            facilis harum, eum id architecto est velit atque tenetur illum!
            Reprehenderit, aut ullam dolorem voluptatum vero laboriosam ex
            placeat, maiores tempora illum non optio id? Beatae id quae
            veritatis, recusandae facere ipsa ullam deserunt ex at. Sed eum quas
            est libero, quidem neque distinctio voluptatibus laudantium
            perspiciatis quos optio eveniet ipsum laboriosam itaque laborum
            reprehenderit delectus quis suscipit modi fuga molestiae autem.
            Error asperiores numquam quam minima voluptatum et, similique
            ducimus doloribus! Nisi, culpa voluptate.
            <p>
              &copy;(new Date().getfullyear()) Cente website INC || All right
              reserved | Terms of Service | Privacy
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
