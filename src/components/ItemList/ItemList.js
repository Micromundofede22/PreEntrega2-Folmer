
import Portada from "../Portada/Portada"
import Item from "../Item/Item"



const ItemList = ({ datosProd, categoriaSub,}) => {

    return (
        <div >

            <Portada subtitulo={categoriaSub} />


            <div className='list-container'>
                <div className='tarjeta-cont'>
                    {datosProd.map((cadaProducto) => (<Item key={cadaProducto.id} item={cadaProducto}/>
                       ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemList