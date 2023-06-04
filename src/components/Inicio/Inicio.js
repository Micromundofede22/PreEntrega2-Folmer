import "./Inicio.scss"
import Slider from "../Slider/Slider"
import images from "../../exports/images"
import terrario  from "./terrario.jpg";
import planta from "./planta.jpg";
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImagenesTextos from "./../ImagenesTextos/ImagenesTextos"
import PortadaResponsive from "../PortadaResponsive/PortadaResponsive";



const cajaVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: ({ delay }) => ({
        opacity: 1,
        scale: 1,
        transition: { delay, duration: 2 }
    }),
}

const movimiento = {
    antes: { x: -400, opacity: 0, scale: 0.5 },
    despues: ({ delay }) => ({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { delay, duration: 2 }
    }),

}


const Inicio = () => {

    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        } else {
            control.start("hidden");
        }
    }, [control, inView])

    useEffect(() => {
        if (inView) {
            control.start("despues")
        } else {
            control.start("antes");
        }
    }, [control, inView])



    return (
        <div className='inicio-container'>
            <PortadaResponsive subtitulo={"Decoración y reflexión..."} />
           
            <div className="container-img">
                <div className="text-container">
                    <motion.p className="text"
                        ref={ref}
                        custom={{ delay: 0.3 }}
                        initial="antes"
                        animate={control}
                        variants={movimiento}
                    >Mi<br />cro<br />mun<br />do</motion.p>
                </div>

                <motion.div
                    ref={ref}
                    custom={{ delay: 0.3 }}
                    initial="hidden"
                    animate={control}
                    variants={cajaVariant} >

                    <img className="img-inicio" src={terrario} alt=""/>

                </motion.div>
            </div>

            <Slider imgT={images} />

            <ImagenesTextos text1={"Llevate gratis"} img={planta} text2={"un libro para reflexionar"} />

            </div>
    )
}


export default Inicio