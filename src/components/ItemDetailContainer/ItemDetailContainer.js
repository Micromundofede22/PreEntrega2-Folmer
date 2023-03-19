import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../funciones/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer=()=>{

    const[item, setItem]= useState(null)
    const [cargando, setCargando]= useState(true)

    const{itemId}= useParams()

    useEffect(()=>{
        setCargando(true)
        pedirDatos()
        .then((res)=>{
            setItem (res.find((prod)=> prod.id === Number(itemId)))
        })
        .finally(()=>{
            setCargando(false)
        })
    }, [])


    return(
        <div>
            <h1>Detalles</h1>

            {
                cargando
                ? <div className="row justify-content-center">
                    <Spinner animation="grow" className="list-spinner" />
                </div>
                : <ItemDetail item={item}/>

            }
        </div>
    )
}

export default ItemDetailContainer