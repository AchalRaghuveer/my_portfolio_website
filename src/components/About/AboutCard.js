import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Achal B Raghuveer </span>
            from <span className="purple"> Texas, United States.</span>
            <br />
            I am currently pursuing my masters in computer science at UT Arlington.
            <br />
            I have 4 years of experience as a Full Stack Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Chasing logic, catching bugs, and crafting solutions."{" "}
          </p>
          <footer className="blockquote-footer">Achal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
