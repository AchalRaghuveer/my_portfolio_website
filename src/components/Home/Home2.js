import React, { useState } from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger, Modal, Button, Form } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import myImg from "../../Assets/me_img.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailContent, setEmailContent] = useState({
    subject: '',
    message: '',
  });

  const handleShow = () => setShowEmailForm(true);
  const handleClose = () => setShowEmailForm(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_nb9je0h', 'template_gztqk5g', {
      subject: emailContent.subject,
      message: emailContent.message,
      to_email: 'achalbr1997@gmail.com', // Change to the recipient email address
    }, 'Nju7D8jZXKh9zfw2H')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setEmailContent({ subject: '', message: '' });
        handleClose();
      })
      .catch((err) => console.error('Failed to send email. Error:', err));
  };

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
              &nbsp; experimenting with data analysis and machine learning.
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
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">achalbr1997@gmail.com</Tooltip>}
                >
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleShow(); }}
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

      <Modal show={showEmailForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send me an Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId="emailMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={emailContent.message}
                onChange={handleChange}
                placeholder="Write your message here with your email and i will reach out to you"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Send Email
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Home2;
