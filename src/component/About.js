import React from "react";
import { Col, Row, Slider } from "antd";
import Item from "antd/es/list/Item";
import { Button } from "antd";
import Style from "./About.module.css";

function About() {
  return (
    <div id="aboutus" className={Style.aboutBlock}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p></p>
        </div>
        <div className="contentHolder">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/2K8rnpPEg0U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
          <Col span={12}>
            <h3>About Us.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              alias dolores qui ab non doloremque, eligendi ex vero eveniet
              harum odit quam. Vitae deleniti eos, corrupti atque doloremque a
              dolorem!
            </p>
            <Button type="primary" danger>
              Join Us
            </Button>
          </Col>

          <Col span={12}>
            <h3> Why Choose US?</h3>
            <ul>
              <h3>
                <li>Consultant With Expert</li>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <h3>
                <li>Best Workout Facilities</li>
              </h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </ul>
          </Col>
          <Col span={12}>
            <iframe
              width="500"
              height="315"
              src="https://www.youtube.com/embed/s8taXR3mYa8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </div>
      <div className="contentHolder"></div>
    </div>
  );
}

export default About;
