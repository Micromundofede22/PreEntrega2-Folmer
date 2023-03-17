import { useEffect, useState } from "react"
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss"
import Spinner from 'react-bootstrap/Spinner';




const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    useEffect(() => {
        setCargando(true)
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((rej) => {
                console.log(rej)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [])



    return (
        <div className="container">
            {/* Antes de la promesa, "cargando" es true, me muestra spiner. Cuando finaliza la promesa, set cargando es false y se carga mi ItemList */}
            {
                cargando
                    ? <div className="row justify-content-center">
                        <Spinner animation="grow" className="list-spinner" />
                    </div>
                    : <ItemList props={productos} slogan={"Somos decoración y reflexión..."} />
            }
        </div>
    )
}

export default ItemListContainer