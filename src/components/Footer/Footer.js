import "./Footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";


function Footer() {

    const[color, setColor]= useState("green");

    useEffect(()=>{
        function moverMouse(evento) {
            if (evento.clientX < window.innerWidth / 2) {
                setColor ("green")
            } else {
                setColor("black")
            }
        }
        window.addEventListener("mousemove", moverMouse)
    }, []);

    return (
        
        <footer style={{background: color}} className="footer">
            <div className="footer-contenedor">
                <img src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/logoblanco.png?raw=true" className="footer-logo" alt="logo" />


                <div>
                <h3 className="footer-text">Seguinos</h3>
                <hr className="footer-text"></hr>
                <div className="footer-redes">
                    <a className="footer-redes__link" href="https://www.instagram.com/micromundo.terrarios/"><FaInstagram /></a>
                    <a className="footer-redes__link" href="https://www.facebook.com/micromundoterrarios/"><FaFacebookF /></a>
                    <a className="footer-redes__link" href="https://wa.pe/Micromundo"><FaWhatsapp /></a>
                </div>
                </div>

                <p className="footer-text">Somos diseño y decoración...</p>

            </div>

        </footer>
    )
}

export default Footer;