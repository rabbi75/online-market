import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export default function Header() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  //console.log(user);
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand To="/">Online Market</Navbar.Brand>
          <Nav className="me-auto navber_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/">Product List</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/update">Update Product</Link>
                <Link to="/search">Search Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") && (
            <Nav>
              <NavDropdown
                title={user && user.name}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
}
