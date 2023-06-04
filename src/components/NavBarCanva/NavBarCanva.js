import "./NavBarCanva.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CarritoMui from "../Carrito/CarritoMui"
import { Link } from "react-router-dom"
import User from "../User/User";


function NavBarCanva() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} className="bg" variant="black" expand={expand} fixed="top" >
                    <Container fluid >

                        <img src="./img/Logos/logoblanco.png" alt="logo" />

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="offcanvas-title">
                                    MICROMUND🐞
                                    <hr className="m-0 w-100"/>

                                    <CarritoMui />

                                    <User/>
                                    
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="offcanvas-body">
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link><Link to="/" className="navbar__link">Inicio</Link></Nav.Link>
                                    <Nav.Link> <Link to="/productos" className="navbar__link">Productos</Link></Nav.Link>
                                    <Nav.Link><Link to="/productos/terrarios" className="navbar__link">Terrarios</Link></Nav.Link>
                                    <Nav.Link><Link to="/productos/lamparas" className="navbar__link">Lámparas</Link></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                       
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBarCanva;