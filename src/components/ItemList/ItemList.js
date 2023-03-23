import { Link } from "react-router-dom"
import Portada from "../Portada/Portada"
import { motion } from "framer-motion"



const ItemList = ({ props, categoriaSub, fondo }) => {

    return (
        <div >

            <Portada subtitulo={categoriaSub} />


            <div className='list-container' style={fondo}>
                <div className='tarjeta-cont'>
                    {props.map((el) => (
                        <div key={el.id} className="tarjeta">
                            <img src={el.img} className="tarjeta-img" alt={`${el.nombre}`} />
                            <h2 className='fw-bold'>{el.nombre}</h2>
                            <span className="tarjeta-precio">Precio: ${el.precio}</span>

                            <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.7 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                            <Link to={`/detail/${el.id}`} className="tarjeta-link">Ver más</Link>
                            </motion.div>
                        </div>))
                    }
                </div>
            </div>

        </div>



    )
}

export default ItemList