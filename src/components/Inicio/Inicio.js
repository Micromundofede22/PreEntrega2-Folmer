import "./Inicio.scss"
import Slider from "../Slider/Slider"
import images from "../../exports/images"
import Portada from "../Portada/Portada"



const Inicio = () => {

    return (
        <div className='inicio-container'>
            <Portada subtitulo={"Decoración y reflexión..."} />
            <Slider imgT={images} />
            
        </div>
    )
}


export default Inicio