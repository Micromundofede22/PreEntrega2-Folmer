import "./ItemListContainer.scss"



const ItemListContainer = ({ gree }) => {
    return (
        <div className="list-container">
            <h2 className="list-container__title">Terrarios</h2>
            <hr></hr>
            <p className="list-container__subtitle">{gree}</p>
        </div>
    )
}

export default ItemListContainer