import Item from "../Item/Item"
import PortadaResponsive from "../PortadaResponsive/PortadaResponsive"



const ItemList = ({ datosProd, categoriaSub, categoria }) => {

    return (
        <div >
            
            <PortadaResponsive subtitulo={categoriaSub} />

            <div className='list-container'>
                <div className='tarjeta-cont'>
                    {datosProd.map((cadaProducto, index) => (
                        <Item key={cadaProducto.id} item={cadaProducto} index={index} categoria={categoria} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemList