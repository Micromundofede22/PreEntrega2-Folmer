import "./Slider.scss"
import { motion } from "framer-motion"


const Slider = ({imgT}) => {
    
    return (
        <motion.div  className="slider-container" >
            <motion.div 
            transition={{duration:20}}
            initial={{x:0}} animate={{x:-3200}}
            className="slider" drag="x" dragConstraints={{right:0, left:-3200 }} dragMomentum={true}>
                {imgT.map((image) => (
                    <motion.div className="item">
                        <img src={image} className="item-img" alt="Terrarios Micromundo" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Slider