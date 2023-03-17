import Button from 'react-bootstrap/Button';


const ItemList = ({props, slogan}) => {

    return (
        <div className='list-container col-12'>

            <h2 className="list-container__title">Terrarios</h2>
            <p className="list-container__subtitle">{slogan}</p>
            <hr></hr>

            <div className='tarjeta-cont'>
                {props.map((el) => (
                    <div key={el.id} className="tarjeta col-4">
                        <img src={el.img} className="tarjeta-img" alt="fotografia terrario con plantas" />
                        <h2>{el.nombre}</h2>
                        <span>Precio: ${el.precio}</span>
                        <Button variant="success">Comprar</Button>
                    </div>))
                }
            </div>
        </div>



    )
}

export default ItemList