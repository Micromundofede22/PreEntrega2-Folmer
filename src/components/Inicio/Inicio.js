import "./Inicio.scss"
import Slider from "../Slider/Slider"
import images from "../../exports/images"
import Portada from "../Portada/Portada"
import TextoAnimadoPalabras from "../TextoAnimado/TextoAnimadoPalabras"
import TextoAnimadoLetras from "../TextoAnimado/TextoAnimadoLetras"





const Inicio = () => {

    return (
        <div className='inicio-container'>
            <Portada subtitulo={"Decoración y reflexión..."} />

            <TextoAnimadoPalabras text={"A tu casa no le puede faltar un Micromundo..."}/>
            <TextoAnimadoLetras text={"A tu casa no le puede faltar un Micromundo..."}/>

            <Slider imgT={images} />
        </div>
    )
}


export default Inicio