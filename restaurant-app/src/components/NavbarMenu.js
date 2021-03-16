import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderPlus,
  faHome,
  faList,
  faSearch,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import img16 from "../Images/img16.png";

class NavbarMenu extends Component {
  render() {
    return (
      <div>
        {/* Code for Navbar */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={img16}
              width="200px"
              height="80px"
              alt="logo-restaurant"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/list">
                  <FontAwesomeIcon icon={faList} /> List
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/create">
                  <FontAwesomeIcon icon={faFolderPlus} /> Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/search">
                  <FontAwesomeIcon icon={faSearch} /> Search
                </Link>
              </Nav.Link>
              {localStorage.getItem("login") ? (
                <Nav.Link href="#link">
                  <Link to="/logout">
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link href="#link">
                  <Link to="/login">
                    <FontAwesomeIcon icon={faUser} /> Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* End  Navbar code*/}
      </div>
    );
  }
}

export default NavbarMenu;
