import React from "react";
import { Col, Row } from "react-bootstrap";
import eclipse_img from "../../Assets/techIMG/eclipse.png"
import vscode_img from "../../Assets/techIMG/vs_img.png"
import linux_img from "../../Assets/techIMG/linux_img.png"
import postman_img from "../../Assets/techIMG/postman_img.jpeg"
import jira_img from "../../Assets/techIMG/Jira.png"
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={eclipse_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={vscode_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={linux_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={postman_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={jira_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
    </Row>
  );
}

export default Toolstack;
