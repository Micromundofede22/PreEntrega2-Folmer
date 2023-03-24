import "./Inicio.scss"
import Slider from "../Slider/Slider"
import images from "../../exports/images"
import Portada from "../Portada/Portada"





const Inicio = () => {

    return (
        <div className='inicio-container'>
            <Portada subtitulo={"Decoración y reflexión..."} />
            <h2 className="inicio-titulo">A tu casa no le puede faltar un Micromundo...
                
            </h2>
            <Slider imgT={images} />
        </div>
    )
}


export default Inicio