import { Link } from "react-router-dom"


const ItemList = ({props, slogan}) => {

    return (
        <div className='list-container'>

            <h2 className="list-container__title">Terrarios</h2>
            <p className="list-container__subtitle">{slogan}</p>
            <hr></hr>

            <div className='tarjeta-cont'>
                {props.map((el) => (
                    <div key={el.id} className="tarjeta">
                        <img src={el.img} className="tarjeta-img" alt={`${el.nombre}`} />
                        <h2 className='fw-bold'>{el.nombre}</h2>
                        <span className="tarjeta-precio">Precio: ${el.precio}</span>
                        <Link to={`/detail/${el.id}`} className="tarjeta-link">Ver más</Link>
                    </div>))
                }
            </div>
        </div>



    )
}

export default ItemList