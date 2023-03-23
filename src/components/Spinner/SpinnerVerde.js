import "./SpinnerVerde.scss"
import Spinner from 'react-bootstrap/Spinner';



const SpinnerVerde = () => {
    return (
        <div>
            <div className="spinner-container">
                <Spinner animation="grow" className="list-spinner" />
            </div>
        </div>
    )


}

export default SpinnerVerde