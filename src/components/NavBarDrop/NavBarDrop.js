import "./NavBarDrop.scss";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"


import "bootstrap/dist/css/bootstrap.min.css";

const NavBarDrop=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Navbar.Brand href="#home">
        <img
         src="https://micromundofede22.github.io/html-Micromundo/imagenes/logoblanco.png"
          alt=""
          width="60"
          height="35"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Link to="/" className="navbar__link">Inicio</Link>
        <Link to="/productos" className="navbar__link">Productos</Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarDrop