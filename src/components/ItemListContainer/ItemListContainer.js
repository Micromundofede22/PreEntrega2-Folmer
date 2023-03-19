import { useEffect, useState } from "react"
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.scss"
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    const {categoriaId}= useParams()

    useEffect(() => {
        setCargando(true)
        pedirDatos()
            .then((res) => {
                if (categoriaId) {
                    setProductos( res.filter((prod)=> prod.categoria === categoriaId) ) 
                }else {
                    setProductos(res)
                }
                
            })
            .catch((rej) => {
                console.log(rej)
            })
            .finally(() => {
                setCargando(false)
            })
    }, [categoriaId])



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