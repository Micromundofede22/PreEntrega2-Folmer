import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";



const ItemCount= ({max, cantidad, setCantidad, agregar}) => {

    const handleRestar= () => {
        cantidad >1 && setCantidad (cantidad - 1)
    }
    const handleSumar= () => {
        cantidad < max && setCantidad (cantidad + 1)
    }



    return(
        <div>
            <button onClick={handleRestar} className="btn btn-success"><GrSubtractCircle/></button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-success"><GrAddCircle/></button>
            <hr/>
            <button onClick={agregar} className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount