import "./PortadaResponsive.scss"
import { useMediaQuery } from "@mui/material";
import isocolor from "./../../assets/isocolor.png"
import { motion } from "framer-motion"



const PortadaResponsive = ({subtitulo}) => {

    const isDesktop= useMediaQuery("(min-width:900px)")
    const variants= isDesktop
    ?{
        initial:{
            opacity:0,
            x:0,
        },
        animate:{
            opacity: 1,
            x: -380
        },
        initialTit:{
            x:0,
            y:0,
            opacity:0
        },
        animateTit:{
            y: -200,
             x:50,
            scale:2.5,
            opacity:1
        },
        initialSub:{
            x: 0, 
            y: 0,
            opacity:0
        },
        animateSub:{
            x: 200, 
            y:-200, 
            opacity:1
        }
    }
    :{
        initial:{
            opacity:0,
            y:-40,
        },
        animate:{
            opacity: 1,
            y: -10
        },
        initialTit:{
            y:-80,
            opacity:0
        },
        animateTit:{
            y: 10,
            opacity:1,
            scale:2.5
        },
        initialSub:{
            y: -60,
            opacity:0
        },
        animateSub:{
            y:0, 
            opacity:1
        }
    }

    return (
        <motion.div className="portada-contenedor">
            <motion.div className="contenedor-img">
                <motion.img
                variants={variants}
                initial={variants.initial}
                animate={variants.animate} 
                transition={{ duration: 2 }}
                    className="portada-img" src={isocolor} alt="logo" />
            </motion.div>

            <motion.h1
            variants={variants}
                initial={variants.initialTit} 
                animate={variants.animateTit}
                transition={{ duration: 2 }}
                className="portada-titulo">Micromund<span className="portada-titulo-vaquita">🐞</span></motion.h1>

            <hr />
            <motion.h3 
            variants={variants}
            initial={variants.initialSub} 
            animate={variants.animateSub}
            transition={{ duration: 2 }}
            className="portada-subt">{subtitulo}</motion.h3>

        </motion.div>
    )
}

export default PortadaResponsive