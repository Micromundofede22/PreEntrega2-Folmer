import "./ordenCompra.scss";
import { useContext, useState } from "react";
import { CarritoContexto } from "../../Context/CarritoContexto";
import { Navigate } from "react-router-dom";
import { dataBase } from "../../firebase/config";
import { collection, addDoc, query, where, documentId, writeBatch, getDocs } from "firebase/firestore";
import { Formik } from "formik";
import * as Yup from "yup"


const esquema = Yup.object().shape({
    nombre: Yup.string()
        .required("Campo requerido")
        .min(3, "Minimo tres caracteres")
        .max(25, "Máximo veinticinco caracteres"),
    direccion: Yup.string()
        .required("Campo requerido")
        .min(6, "Minimo tres caracteres")
        .max(25, "Máximo veinticinco caracteres"),
    email: Yup.string()
        .email("El email no es válido")
        .required("Campo requerido")
})




const OrdenCompra = () => {
    const { carrito, totalCompra, vaciarCarrito } = useContext(CarritoContexto)
    const [ordenId, setOrdenId] = useState(null)



    const generarOrden = async (values) => {

        const orden = {
            cliente: values,
            item: carrito,
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(dataBase)

        const ordenRef = collection(dataBase, "ordenes")
        const productosRef = collection(dataBase, "productos")
        const q = query(productosRef, where(documentId(), "in", carrito.map(item => item.id)))

        const sinStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const item = carrito.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                sinStock.push(item)
            }
        })


        if (sinStock.length === 0) {
            batch.commit()
                .then(
                    addDoc(ordenRef, orden)
                        .then((res) => {
                            setOrdenId(res.id)
                            vaciarCarrito()
                        })
                )
        } else {
            alert("No hay stock de " + sinStock.map(i => i.name).join(", "))
        }
    }

    

    if (ordenId) {
        return (
            
            
            <div className="orden-contenedor">
                <h3 className="orden-mensaje">Tu compra se registró exitosamente</h3>
                <p className="orden-numero">Guarda tu número de orden: <strong className="fw-5">{ordenId}</strong> </p>
            </div>
        )
    }
   

    if (carrito.length === 0) {
        return <Navigate to="/productos" />
    }




    return (
        <div className="orden-contenedor">
            <h2 className="orden-titulo">Ingresa tus datos</h2>
            <hr />

            <Formik
                validationSchema={esquema}
                initialValues={{
                    nombre: "",
                    direccion: "",
                    email: ""
                }}
                onSubmit={generarOrden}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            value={values.nombre}
                            type="text"
                            className="form-control my-2"
                            placeholder="Tu nombre"
                            onChange={handleChange}
                            name="nombre"
                        />
                        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}

                        <input
                            value={values.direccion}
                            type="text"
                            className="form-control my-2"
                            placeholder="Tu dirección"
                            name="direccion"
                            onChange={handleChange}
                        />
                        {errors.direccion && <p style={{ color: "red" }}>{errors.direccion}</p>}

                        <input
                            value={values.email}
                            type="email"
                            className="form-control my-2"
                            placeholder="Tu email"
                            name="email"
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                        <button
                            type="submit"
                            className="btn btn-success"
                        >Enviar</button>

                    </form>)}

            </Formik>

        </div>
    )
}

export default OrdenCompra