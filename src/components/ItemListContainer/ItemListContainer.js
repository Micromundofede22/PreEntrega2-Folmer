import "./ItemListContainer.scss"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import SpinnerVerde from "../Spinner/SpinnerVerde";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/config"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    const { categoriaId } = useParams()

    useEffect(() => {
        setCargando(true)
        //   1. armar una referencia sync
        const productoRef = collection(dataBase, "productos")
        const q = categoriaId 
            ? query(productoRef, where("categoria", "==", categoriaId))
            : productoRef && query(productoRef, orderBy("orden"))
        //   2. llamar a esa referencia async
        getDocs(q)
            .then((res) => {
                setProductos(res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => setCargando(false))
    }, [categoriaId])




    return (
        <div className="container">
            {/* Antes de la promesa, "cargando" es true, me muestra spiner. Cuando finaliza la promesa, set cargando es false y se carga mi ItemList */}
            {
                cargando
                    ?
                    <SpinnerVerde />
                    : <ItemList
                        datosProd={productos}
                        categoriaSub={categoriaId ? categoriaId.toUpperCase() : "PRODUCTOS"}
                        categoria={categoriaId}

                    />
            }
        </div>
    )
}

export default ItemListContainer