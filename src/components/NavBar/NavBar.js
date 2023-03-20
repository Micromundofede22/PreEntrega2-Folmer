import Carrito from "../Carrito/Carrito"
import "./NavBar.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"




export const NavBar= ()=>{
    return(
        <header className="header">
            <div className="header__container">
                <img src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/logoblanco.png?raw=true" className="header__logo" alt="logo"/>

                <motion.nav whileHover={{ scale: 1.2 }}
  className="navbar" >
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/productos" className="navbar__link">Productos</Link>
                    <Link to="/productos/terrarios" className="navbar__link">Terrarios</Link>
                    <Link to="/productos/lamparas" className="navbar__link">Lámparas</Link>
                    
                    
                </motion.nav>

                <Carrito/>

            </div>
        </header>
    )
}