import "./Footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";


function Footer() {

    const isDesktop= useMediaQuery("(min-width:900px)")

    const[color, setColor]= useState("darkgreen");

    useEffect(()=>{
        function moverMouse(evento) {
            if (evento.clientX < window.innerWidth / 2) {
                setColor ("rgba(26,137,63,255)")
            } else {
                setColor("black")
            }
        }
        window.addEventListener("mousemove", moverMouse)
    }, []);

    return (
        
        <footer style={{background: color}} className="footer">
            <div className="footer-contenedor">
                <img src="./img/Logos/logoblanco.png" className="footer-logo" alt="logo" />


                <div>
                <h3 className="footer-text">Seguinos</h3>
                <hr className="footer-text"></hr>
                <div className="footer-redes">
                    <a className="footer-redes__link" href="https://www.instagram.com/micromundo.terrarios/"><FaInstagram /></a>
                    <a className="footer-redes__link" href="https://www.facebook.com/micromundoterrarios/"><FaFacebookF /></a>
                    <a className="footer-redes__link" href="https://wa.pe/Micromundo"><FaWhatsapp /></a>
                </div>
                </div>
                {
                    isDesktop
                    ?<p className="footer-text">Somos decoración y reflexión...</p>
                    : <p></p>
                }
                

            </div>

        </footer>
    )
}

export default Footer;