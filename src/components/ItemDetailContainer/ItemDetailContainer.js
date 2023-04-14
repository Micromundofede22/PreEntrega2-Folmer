import "./ItemDetailContainer.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import SpinnerVerde from "../Spinner/SpinnerVerde"
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/config"



const ItemDetailContainer=()=>{

    const[item, setItem]= useState(null)
    const [cargando, setCargando]= useState(true)

    const{itemId}= useParams()

    useEffect(()=>{
        setCargando(true)
    //   1. armar una referencia sync
     const docRef= doc(dataBase, "productos", itemId)
    //   2. llamar a esa referencia async
      getDoc(docRef)
      .then((doc)=>{
        setItem({
            id: doc.id,
            ...doc.data()
        })
      })
      .finally(()=>{
        setCargando(false)
      })
    }, [itemId])


    return(
        <div className="item-detail-container">
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