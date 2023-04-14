import "./ItemCount.scss"
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";
import { RiPlantLine } from "react-icons/ri"
import { IoPrism } from "react-icons/io5";





const ItemCount = ({ max, cantidad, setCantidad, agregar, categoria }) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }



    return (
        <div>
            <div className="d-flex">

                <button
                    onClick={handleRestar}

                    className={`boton
                    ${categoria === "lamparas"
                            ? "boton-lamparas"
                            : "boton-terrarios"}`}
                    disabled={cantidad === 1 || max === 0}
                >

                    {cantidad !== 1
                        ? <GrSubtractCircle />
                        : categoria === "terrarios"
                            ? <RiPlantLine className="fs-5" />
                            : <IoPrism />
                    }

                </button>

                <span className="mx-4 fs-5">{cantidad}</span>

                <button
                    onClick={handleSumar}
                    className={`boton
                ${categoria === "lamparas"
                            ? "boton-lamparas"
                            : "boton-terrarios"}`}
                    disabled={cantidad === max || max === 0}
                >
                    {cantidad !== max
                        ? <GrAddCircle />
                        : <RiPlantLine className="fs-5" />}
                </button>
            </div>

            <hr />
            <button
                onClick={agregar}
                className={`boton
                ${categoria === "lamparas"
                        ? "boton-lamparas"
                        : "boton-terrarios"
                    }`}
            >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount