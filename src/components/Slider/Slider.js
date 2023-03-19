import "./Slider.scss"
import images from "../../exports/images"
import { motion } from "framer-motion"


const Slider = () => {
    

    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag="x" dragConstraints={{right:0, left:-3200}}>
                {images.map((image) => (
                    <motion.div className="item">
                        <img src={image} className="item-img" alt="Terrarios Micromundo" />
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Slider