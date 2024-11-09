import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../Assets/Images/user.png";
import navIcon1 from "../Assets/Images/nav-icon1.svg";
import navIcon2 from "../Assets/Images/github.svg";
import navIcon3 from "../Assets/Images/nav-icon3.svg";
import Contact from "./Contact";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Contact/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/harsimran-kaur-44b7191b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/harsimrankaur2493" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/harsimrannnnkaur/?next=%2F" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}