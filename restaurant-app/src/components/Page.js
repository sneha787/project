import React, { Component } from "react";
import img13 from "../Images/img13.jpeg";
import img14 from "../Images/img14.png";
import img5 from "../Images/img5.jpeg";
import img6 from "../Images/img6.jpeg";
import img15 from "../Images/img15.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { section } from "react-bootstrap";

class Page extends Component {
  render() {
    return (
      <div>
        <section
          class="white-section"
          id="features"
          style={{ marginTop: "30px" }}
        >
          <div class="container-fluid">
            <div class="row">
              <div class="feature-box col-lg-4 col-md-6">
                <img
                  className="d-block homeimg"
                  src={img5}
                  height="90px"
                  width="90px"
                  alt="First slide"
                />
                <h3 class="feature-title">Morning Snacks</h3>
                <p>Crispy waffle with ground beef.</p>
              </div>
              <div class="feature-box col-lg-4">
                <img
                  className="d-block homeimg"
                  src={img6}
                  height="90px"
                  width="90px"
                  alt="First slide"
                />
                <h3 class="feature-title">Lettuce Wraps</h3>
                <p>We have all the tacos with green.</p>
              </div>
              <div class="feature-box col-lg-4">
                <img
                  className="d-block homeimg"
                  src={img15}
                  height="90px"
                  width="90px"
                  alt="First slide"
                />
                <h3 class="feature-title">Spagahetti balls</h3>
                <p>With Italian sauce and meatballs.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ margin: "50px" }}>
          <div>
            <div>
              <img
                src={img13}
                width="300px"
                height="300px"
                alt="Menu"
                style={{ float: "right" }}
              />
            </div>
            <div style={{ width: "950px" }}>
              <p style={{ textAlign: "justify" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src={img14}
                width="300px"
                height="300px"
                alt="Menu"
                style={{ float: "left" }}
              />
            </div>
            <div style={{ width: "950px", float: "right" }}>
              <p style={{ textAlign: "justify" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Page;
