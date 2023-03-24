import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContexto } from "../../Context/CarritoContexto"
import ItemCount from "../ItemCount/ItemCount"
import Select from "../Select/Select"

const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, existeEnCarrito } = useContext(CarritoContexto)

    const [cantidad, setCantidad] = useState(1)
    const [color, setColor] = useState("negro")


    const handleAgregar = () => {
        const itemAgregado = {
            ...item,
            cantidad,
            color
        }
        agregarAlCarrito(itemAgregado)
    }


    return (
        <div className="detail-contenedor">
            <img className="detail-img" src={item.img} alt={item.name} />
            <div className="detail-contenedorInfo">
                <p className="detail-nombre">{item.nombre}</p>
                <p className="detail-descrip">Descripción: {item.medidas}</p>
                <p className="detail-precio">Precio: ${item.precio}</p>

                <Select
                    set={setColor}
                    opcColor={item.colorBorde} />

                {
                    existeEnCarrito(item.id)
                        ? <Link to="/carrito" >Terminar compra</Link>
                        : <ItemCount
                            max={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar} />
                }

            </div>
        </div>
    )
}

export default ItemDetail