import "./Portada.scss"
import isocolor from "./../../assets/isocolor.png"
import { motion } from "framer-motion"



const Portada = ({subtitulo}) => {

    return (
        <motion.div className="portada-contenedor">
            <motion.div className="contenedor-img">
                <motion.img
                    whileinview={{}}
                    transition={{ duration: 2 }}
                    viewport={{}}
                    animate={{ x: -380, }}
                    drag="x" dragConstraints={{ right: 0, left: -5 }} 
                    className="portada-img" src={isocolor} alt="Hojas" />
            </motion.div>

            <motion.h1
                whileinview={{color:"black"}}
                initial={{x:0,y:0}} animate={{ y: -200, x:50, scale:2.5}}
                transition={{ duration: 2 }}
                drag="y" 
                className="portada-titulo">Micromund<span className="portada-titulo-vaquita">🐞</span></motion.h1>

            <hr />
            <motion.h3 
            initial={{ x: 0, y: 0, opacity:0}} animate={{ x: 200, y:-200, opacity:1 }}
            transition={{ duration: 2 }}
            className="portada-subt">{subtitulo}</motion.h3>

        </motion.div>
    )
}

export default Portada