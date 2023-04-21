import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContexto } from "../../Context/CarritoContexto"
import ItemCount from "../ItemCount/ItemCount"
import Select from "../Select/Select"
import { toast, ToastContainer, Zoom } from "react-toastify";


const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, existeEnCarrito } = useContext(CarritoContexto)

    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] = useState("negro")


    const handleAgregar = () => {
        const itemAgregado = {
            ...item,
            cantidad,
            color,
        }
        agregarAlCarrito(itemAgregado)

        toast.success("Agregado al carito",
            {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
                theme: "dark",
                transition: Zoom,
                autoClose: 1500
            })

    }


    return (
        <div
            className="detail-contenedor">
            <img className="detail-img" src={item.img} alt={item.name} />
            <div className="detail-contenedorInfo">
                <p className="detail-nombre">{item.nombre}</p>
                {item.stock <= 3 && <p>Solo quedan {item.stock} unidades</p>}
                <p className="detail-descrip">Descripción: {item.medidas}</p>
                <p className="detail-precio">Precio: ${item.precio}</p>

                <Select
                    set={setColor}
                    opcColor={item.colorBorde}
                    categoriaColor={item.categoria}
                />

                {

                    item.stock === 0
                        ? <div>
                            <h3>No hay stock</h3>
                            <button className="btn btn-success">Volver a productos</button>
                        </div>
                        :
                        existeEnCarrito(item.id)
                            ? <Link to="/carrito"
                                className={`boton w-25
                                        ${item.categoria === "lamparas"
                                        ? "boton-lamparas"
                                        : "boton-terrarios"}`}
                            >Ir al carrito</Link>
                            : <ItemCount
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                agregar={handleAgregar}
                                categoria={item.categoria} />
                }
                <ToastContainer />

            </div>
        </div>
    )
}

export default ItemDetail