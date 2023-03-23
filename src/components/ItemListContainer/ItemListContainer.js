import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import { pedirDatos } from "../../funciones/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import SpinnerVerde from "../Spinner/SpinnerVerde";





const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    const { categoriaId } = useParams()

    useEffect(() => {
        setCargando(true)
        pedirDatos()
            .then((res) => {
                if (categoriaId) {
                    setProductos(res.filter((prod) => prod.categoria === categoriaId))
                } else {
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

    // fondo
   


    return (
        <div className="container">
            {/* Antes de la promesa, "cargando" es true, me muestra spiner. Cuando finaliza la promesa, set cargando es false y se carga mi ItemList */}
            {
                cargando
                    ?
                    <SpinnerVerde/>
                    : <ItemList
                        props={productos}
                        categoriaSub={categoriaId ? categoriaId.toUpperCase() : "PRODUCTOS"}
                    />
            }
        </div>
    )
}

export default ItemListContainer