import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import java_img from "../../Assets/techIMG/java.png"
import spring_img from "../../Assets/techIMG/springboot.png"
import react_img from "../../Assets/techIMG/react.png"
import sql_img from "../../Assets/techIMG/sql.png"
import python_img from "../../Assets/techIMG/python.png"
import rest_svg from "../../Assets/techIMG/rest.png"
import aws_img from "../../Assets/techIMG/AWS.png"
import azure_img from "../../Assets/techIMG/Azure.png"
import gitA_img from "../../Assets/techIMG/GitHubActions.png"
import javaS_img from "../../Assets/techIMG/javascript.png"
import json_img from "../../Assets/techIMG/json.png"
import android_img from "../../Assets/techIMG/android.png"
import git_img from "../../Assets/techIMG/gitTrans.png"
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJava /> */}
        <img
                src={java_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={javaS_img}
                alt="spring image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
                src={python_img}
                alt="react image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={sql_img}
                alt="sql img"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={git_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={spring_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={react_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={aws_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={azure_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={rest_svg}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={gitA_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={android_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
                src={json_img}
                alt="java image"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
      </Col>
    </Row>
  );
}

export default Techstack;
