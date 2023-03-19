import Carrito from "../Carrito/Carrito"
import "./NavBar.scss"
import { Link } from "react-router-dom"



export const NavBar= ()=>{
    return(
        <header className="header">
            <div className="header__container">
                <img src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/logoblanco.png?raw=true" className="header__logo" alt="logo"/>

                <nav className="navbar">
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/productos" className="navbar__link">Productos</Link>
                    <Link to="/productos/terrarios" className="navbar__link">Terrarios</Link>
                    <Link to="/productos/lamparas" className="navbar__link">Lámparas</Link>
                    
                    
                </nav>

                <Carrito/>

            </div>
        </header>
    )
}