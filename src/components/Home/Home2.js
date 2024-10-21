import React from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import myImg from "../../Assets/me_img.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const tooltip = (
  <Tooltip id="tooltip">
    <strong>Holy guacamole!</strong> Check this info.
  </Tooltip>
);

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a software engineer who loves turning complex problems into simple solutions.
              <br />
              <br />With a background in
              <i>
                <b className="purple"> Java, Python, and JavaScript. </b>
              </i>
              <br />
              <br />
              I enjoy building everything from &nbsp;
              <i>
                <b className="purple">responsive web apps with React to robust backend systems using Spring Boot. </b>
              </i>
              <br />
              <br />
              I’m always exploring new technologies, whether it’s creating cloud solutions with
              {/* <b className="purple">AWS</b> or
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i> */}
              &nbsp; experimenting with data analysis and machine learning.
              {/* <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
              &nbsp; Let’s build something cool together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AchalRaghuveer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/achal-bhujangaswami-raghuveer-459023166/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">


                <OverlayTrigger
                  placement="top" // You can change this to "bottom", "left", or "right" as needed.
                  overlay={
                    <Tooltip id="tooltip-top">
                      achalbr1997@gmail.com
                    </Tooltip>
                  }
                >
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <MdEmail />
                  </a>
                </OverlayTrigger>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
