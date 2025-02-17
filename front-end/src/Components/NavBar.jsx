import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { useTheme } from "../ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className={`sticky-top ${isDarkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}>
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          CricBro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
              style={{ backgroundColor: isDarkMode ? "#444" : "white", color: isDarkMode ? "white" : "black" }}
            />
            <Button variant={isDarkMode ? "outline-light" : "outline-success"}>Search</Button>
          </Form>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#" className="fw-semibold">Predict</Nav.Link>
            <Nav.Link href="#" className="fw-semibold">News</Nav.Link>
            <Nav.Link href="#" className="fw-semibold">Login</Nav.Link>
            <Button
              variant={isDarkMode ? "outline-light" : "outline-dark"}
              onClick={toggleTheme}
              className="ms-3"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;