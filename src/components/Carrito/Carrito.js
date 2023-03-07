import "./Carrito.scss"
import { BsFillBagHeartFill } from "react-icons/bs";


const Carrito= ()=> {
    return(
        <div className="carrito-contenedor">
            <BsFillBagHeartFill className="carrito-icon"/>
            <span className="carrito-contador">0</span>
        </div>
    )
};

export default Carrito;