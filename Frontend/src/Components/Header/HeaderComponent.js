import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "./HeaderComponent.css";
import LogIn from "../../Container/login/LogIn";
import SignUp from "../../Container/SignUp/SignUp";
import DetailsContainer from "../../Container/Details/DetailsContainer";
// import PublishMovie from "../../Container/PublishMovie/PublishMovie";

const HeaderComponent = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPublished, setShowPublished] = useState(false);
  // const [publishedMovie, setPublishedMovie] = useState(null);
  // const [published, setPublished] = useState(false);
  // const [publishedMovieId, setPublishedMovieId] = useState(null);

  const handleSignInClick = () => {
    setShowLogIn(true);
  };

  const handleSignUpClick = () => {
    setShowRegister(true);
  };

  // const handlePublishedClick = () => {
  //   setShowPublished(true);
  // };

  const handleClose = () => {
    setShowLogIn(false);
    setShowRegister(false);
    // setShowPublished(false);
  };

  // const handlePublishMovie = (event) => {
  //   event.preventDefault();
  //   const movieId = event.target.elements.movieId.value;
  //   setPublishedMovieId(movieId);
  //   setPublished(true);
  //   setShowPublished(false);
  // };

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
          <img
            className="header__icon"
            src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              // navbarScroll
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
              {/* <Button
                variant="outline-primary"
                className="customButtonPublished"
                onClick={handlePublishedClick}
              >
                Published
              </Button> */}
              {/* <PublishMovie /> */}
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

      {/* <Modal show={showPublished} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Publish Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePublishMovie}>
            <Form.Group controlId="movieTitle">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control type="text" placeholder="Enter movie title" />
            </Form.Group>
            <Form.Group controlId="movieId">
              <Form.Label>Movie Id</Form.Label>
              <Form.Control type="text" placeholder="Enter movie id" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Publish
            </Button>
          </Form>
        </Modal.Body>
      </Modal> */}
    </header>
  );
};

export default HeaderComponent;
