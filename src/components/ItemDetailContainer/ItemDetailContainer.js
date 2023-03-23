import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../funciones/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import SpinnerVerde from "../Spinner/SpinnerVerde"


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
    }, [itemId])


    return(
        <div>
            {
                cargando
                ? 
                <SpinnerVerde/>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer