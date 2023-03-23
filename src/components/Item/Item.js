import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const Item= ({item}) => {

    return(
        <div className="tarjeta">
        <img src={item.img} className="tarjeta-img" alt={`${item.nombre}`} />
        <h2 className='fw-bold'>{item.nombre}</h2>
        <span className="tarjeta-precio">Precio: ${item.precio}</span>

        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.7 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <Link to={`/detail/${item.id}`} className="tarjeta-link">Ver más</Link>
        </motion.div>
    </div>
    )
}

export default Item