import { Link } from "react-router-dom"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const cajaVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: ({delay}) => ({ 
        opacity: 1, 
        scale: 1, 
        transition: {delay, duration: 2 } }
    ),
}

const Item = ({ item, index }) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        } else {
            control.start("hidden");
        }
    }, [control, inView])


    return (
        <motion.div className="tarjeta"
            ref={ref}
            custom={{ delay: (index + 1 ) * 0.2 }}
            initial="hidden"
            animate={control}
            variants={cajaVariant}
        >
            <img src={item.img} className="tarjeta-img" alt={`${item.nombre}`} />
            <h2 className='fw-bold'>{item.nombre}</h2>
            <span className="tarjeta-precio">Precio: ${item.precio}</span>

            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.7 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>

                <Link to={`/detail/${item.id}`} className="tarjeta-link">Ver más</Link>

            </motion.div>
        </motion.div>
    )
}

export default Item