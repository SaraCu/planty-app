import React from "react";
import "./contact.styles.scss";
import twitter from "../../images/twitter2.png";
import facebook from "../../images/facebook.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import plant from "../../images/Planty.svg";
import { Form, Row, Col } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      {" "}
      <h1 className="title">Contact Planty</h1>
      <div>saracuzele@gmail.com</div>
      <div>10000 Zagreb, Croatia</div>
      <Form>
        <Form.Group className="subscribe" controlId="formBasicEmail" as={Row}>
          <Form.Label column xs="12" lg="auto" className="subscribe-label">
            Subscribe:
          </Form.Label>
          <Col className="subscribe-email" xs="12" lg="auto">
            {" "}
            <Form.Control
              className="subscribe"
              type="email"
              placeholder="Enter email"
            />
            <button className="remove subscribe">
              {" "}
              <Check width="1.5em" height="1.5em" className="bi bi-x"></Check>
            </button>
          </Col>
          <Col xs="12">
            {" "}
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>
        </Form.Group>
      </Form>
      <div>
        <img class="plant-contact" src={plant} alt="plant ilustartion"></img>
      </div>
      <div className="icons-row">
        <button className="btn-icon">
          {" "}
          <img className="icons" alt="twitter" src={twitter}></img>
        </button>{" "}
        <button className="btn-icon">
          {" "}
          <img className="icons" alt="instagram" src={insta}></img>
        </button>{" "}
        <button className="btn-icon">
          {" "}
          <img className="icons" alt="facebook" src={facebook}></img>
        </button>
        <button className="btn-icon">
          {" "}
          <img className="icons" alt="linkedin" src={linkedin}></img>
        </button>
      </div>
    </div>
  );
};

export default Contact;
