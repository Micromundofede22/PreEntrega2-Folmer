import { motion } from "framer-motion";

const TextoAnimadoLetras = ({ text }) => {

    const letras = Array.from(text)

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.02, delayChildren: 0.4 * i
            }
        })
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
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
                letras.map((letra, index) => (
                    <motion.span
                        variants={child}
                        key={index}>
                        {letra === " " ? "\u00A0" : letra}
                    </motion.span>
                ))
            }

        </motion.div>
    )
}

export default TextoAnimadoLetras