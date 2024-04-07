import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./HeaderComponent.css";
import LogIn from "../../Container/login/LogIn";
import SignUp from "../../Container/SignUp/SignUp";

const HeaderComponent = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSignInClick = () => {
    setShowLogIn(true);
  };

  const handleSignUpClick = () => {
    setShowRegister(true);
  };

  const handleClose = () => {
    setShowLogIn(false);
    setShowRegister(false);
  };

  const navData = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "Tv Series", link: "/series" },
    { name: "Search", link: "/search" },
    { name: "Contact Us", link: "/contact" },
    { name: "About Us", link: "/about" },
  ];

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>My Theatre App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navData.map((item) => {
                return (
                  <Nav key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </Nav>
                );
              })}
            </Nav>
            <Nav className="ml-auto">
              <Button
                variant="outline-primary"
                className="mr-2 customButton"
                onClick={handleSignInClick}
              >
                Sign In
              </Button>
              <Button
                variant="outline-primary"
                className="customButton"
                onClick={handleSignUpClick}
              >
                Sign Up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogIn} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LogIn />
        </Modal.Body>
      </Modal>

      <Modal show={showRegister} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp />
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default HeaderComponent;
