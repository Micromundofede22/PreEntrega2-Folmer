import { motion } from "framer-motion";

const TextoAnimadoPalabras = ({ text }) => {

    const frase = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12, delayChildren: 3 * i
            }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            // y: 0,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            // y: -20,
            x: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    }



    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", justifyContent: "center", fontSize: "2rem", fontWeight: 500 }}
            variants={container}
            initial="hidden"
            animate="visible">

            {
                frase.map((palabra, index) => (
                    <motion.span
                        variants={child}
                        style={{ marginRight: "6px", fontSize: "30px", fontWeight: "bold" }} key={index}> {palabra} </motion.span>
                ))
            }

        </motion.div>
    )
}

export default TextoAnimadoPalabras