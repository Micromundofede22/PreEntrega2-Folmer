import "./NavBar.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import CarritoMui from "../Carrito/CarritoMui"
import User from "../User/User"




export const NavBar = () => {


    return (
        <header className="header">
            <div className="header__container">
                <img src="./img/Logos/logoblanco.png" className="header__logo" alt="logo" />

                <motion.nav 
                    className="navbar" >
                    <motion.div whileHover={{ scale: 1.3 }}>
                        <Link to="/" className="navbar__link">Inicio</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.3 }}>
                    <Link to="/productos" className="navbar__link">Productos</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.3 }}>
                    <Link to="/productos/terrarios" className="navbar__link">Terrarios</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.3 }}>
                    <Link to="/productos/lamparas" className="navbar__link">Lámparas</Link>
                    </motion.div>

                </motion.nav>

                <CarritoMui/>

            </div>
            <hr className="m-0"/>
           <User/>
        </header>
    )
}