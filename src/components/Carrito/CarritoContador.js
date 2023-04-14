import "./CarritoContador.scss"
import { BsFillBagHeartFill } from "react-icons/bs";
import { useContext } from "react";
import { CarritoContexto } from "../../Context/CarritoContexto";
import { Link } from "react-router-dom";


const CarritoContador= ()=> {

    const {totalCantidad}=useContext(CarritoContexto)

    return(
        <Link to="/carrito" className="carrito-contenedor">
            <BsFillBagHeartFill className="carrito-icon"/>
            <span className="carrito-contador">{totalCantidad()}</span>
        </Link>
    )
};

export default CarritoContador;