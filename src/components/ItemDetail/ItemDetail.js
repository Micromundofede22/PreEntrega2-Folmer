

const ItemDetail = ({ item }) => {


    return (
        <div className="detail-contenedor">
            <img className="detail-img" src={item.img} alt={item.name} />
            <div className="detail-contenedorInfo">
                <p className="detail-nombre">{item.nombre}</p>
                <p className="detail-descrip">Descripción: {item.medidas}</p>
                <p className="detail-precio">Precio: ${item.precio}</p>
            </div>
        </div>
    )
}

export default ItemDetail