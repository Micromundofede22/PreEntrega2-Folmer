import "./Carrito.scss"
import { useContext } from "react"
import { CarritoContexto } from "../../Context/CarritoContexto"
import { BsFillTrash3Fill } from "react-icons/bs";
import ImageAvatars from "../Avatar/Avatar";
import CantidadesCarrito from "../CantidadesCarrito/CantidadesCarrito";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


export const Carrito = () => {

    const { carrito, vaciarCarritoAlerta, removerItem, totalCompra } = useContext(CarritoContexto)


    return (
        <div className="carrito-contenedor">

            <h1 className="carrito-titulo">A un paso de tener tu Micromundo<ImageAvatars img={"./img/Caricatura/terrario.jpg"} /></h1>
            <hr></hr>
            {
                carrito.map((prod) => (
                    <div className={`carrito-item ${prod.categoria === "lamparas"
                        ? "carrito-item-rosa"
                        : "carrito-item-verde"

                        }
                        
                        `
                    } key={prod.id}>
                        <img src={prod.img} alt={prod.nombre} className="carrito-img" />
                        <h3 className="carrito-nombre">{prod.nombre}</h3>
                        <span className="carrito-unitario">${prod.precio}</span>

                        <CantidadesCarrito cantidad={prod.cantidad} id={prod.id} stock={prod.stock} />

                        <span className="carrito-total">Total: $ {prod.precio * prod.cantidad}</span>
                        <button onClick={() => removerItem(prod.id)} className="btn btn-danger"><BsFillTrash3Fill /></button>
                    </div>
                ))
            }
            <hr></hr>

            <button onClick={vaciarCarritoAlerta} className="btn btn-danger boton" >Vaciar Carrito<BsFillTrash3Fill /></button>

            <h3 className="carrito-totalcompra">TOTAL: ${totalCompra()}</h3>

            <Link to="/ordencompra" className="btn boton-terminar" >Terminar compra</Link>
            
            <ToastContainer/>
        </div>
    )
}
