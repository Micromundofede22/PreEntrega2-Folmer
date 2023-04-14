import "./Carrito.scss"
import { useContext } from "react"
import { CarritoContexto } from "../../Context/CarritoContexto"
import { BsFillTrash3Fill } from "react-icons/bs";
import ImageAvatars from "../Avatar/Avatar";
import CantidadesCarrito from "../CantidadesCarrito/CantidadesCarrito";
import { Link } from "react-router-dom";


export const Carrito = () => {

    const { carrito, vaciarCarrito, removerItem, totalCompra } = useContext(CarritoContexto)


    return (
        <div className="carrito-contenedor">

            <h1 className="carrito-titulo">A un paso de tener tu terrario<ImageAvatars img={"./img/Caricatura/terrario.jpg"} /></h1>
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

                        <CantidadesCarrito cantidad={prod.cantidad} id={prod.id} stock={prod.stock}/>

                        <span className="carrito-total">Total: $ {prod.precio * prod.cantidad}</span>
                        <button onClick={() => removerItem(prod.id)} className="btn btn-danger"><BsFillTrash3Fill /></button>
                    </div>
                ))
            }
            <hr></hr>
            <h3 className="carrito-totalcompra">TOTAL: ${totalCompra()}</h3>
            <button onClick={vaciarCarrito} className="btn btn-success" >Vaciar Carrito</button>
            <Link to="/ordencompra" className="btn btn-success" >Terminar compra</Link>
        </div>
    )
}
