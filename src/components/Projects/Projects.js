import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Covid Count"
              description=" Delivered real-time global Covid-19 statistics by seamlessly integrating data from four open source online APIs.
Enabled live tracking of cases in 115 countries"
              ghLink="https://github.com/AchalRaghuveer/CovidCount"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Heart Disease Prediction"
              description=" Developed a heart disease prediction model using the K-Nearest Neighbors (KNN) algorithm, leveraging patient
data to accurately classify individuals based on their risk of heart disease"
              ghLink="https://github.com/AchalRaghuveer/heartDisease"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Diversity Connect"
              description=" Driving diversity by building a state-of-the-art job portal, Diversity Connect, in order to unite talents for inclusive opportunities"
              ghLink="https://github.com/AchalRaghuveer/diversity-connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Chat Ease"
              description="A real-time chat application for seamless communication, featuring group chats, media sharing, and secure, end-to-end encryption. Stay connected on mobile, whether for casual chats or professional conversations."
              ghLink="https://github.com/Shruthaja/ChatEaseGroup8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
