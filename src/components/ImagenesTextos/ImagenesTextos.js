import "./ImagenesTextos.scss";
import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";



const cajaVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: ({ delay }) => ({
        opacity: 1,
        scale: 1,
        transition: { delay, duration: 2 }
    }),
}

const movimiento1 = {
    izq: { x: -100, opacity: 0, scale: 0.5 },
    dere: ({ delay }) => ({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { delay, duration: 3 }
    }),
}

const movimiento2 = {
    derecha: { x: 100, opacity: 0, scale: 0.5 },
    izquierda: ({ delay }) => ({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { delay, duration: 3 }
    }),
}



const ImagenesTextos = ({text1, img, text2 }) => {
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
            control.start("dere")
        } else {
            control.start("izq");
        }
    }, [control, inView])

    useEffect(() => {
        if (inView) {
            control.start("izquierda")
        } else {
            control.start("derecha");
        }
    }, [control, inView])


    return (
       
            <div className="container_img">
                <div className="text_container">
                    <motion.p className="text_"
                        ref={ref}
                        custom={{ delay: 0.3 }}
                        initial="izq"
                        animate={control}
                        variants={movimiento1}
                    >{text1}</motion.p>
                </div>

                <motion.div
                    ref={ref}
                    custom={{ delay: 0.3 }}
                    initial="hidden"
                    animate={control}
                    variants={cajaVariant} >

                    <img className="img_inicio" src={img} alt="caricatura"/>

                </motion.div>

                <div className="text_container">
                    <motion.p className="text_"
                        ref={ref}
                        custom={{ delay: 0.3 }}
                        initial="derecha"
                        animate={control}
                        variants={movimiento2}
                    >{text2}</motion.p>
                </div>


            </div>
    )
}

export default ImagenesTextos