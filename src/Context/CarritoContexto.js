import { createContext, useState } from "react";
import { Flip, toast, Zoom } from "react-toastify";
import Swal from 'sweetalert2'


export const CarritoContexto = createContext()

export const CarritoProveedor = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
    }

    const removerItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
        toast.error("Eliminado 😰",
            {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: "foo-bar",
                theme: "dark",
                transition: Flip,
                autoClose: 1500
            })

    }

    const existeEnCarrito = (id) => {
        return carrito.some((el) => el.id === id)
    }

    const totalCantidad = () => {
        return carrito.reduce((acc, el) => acc + el.cantidad, 0)
    }

    const vaciarCarrito=()=>{
        setCarrito([])
    }

    const vaciarCarritoAlerta = () => {
        // setCarrito([])

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-danger mx-2',
                cancelButton: 'btn btn-success'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro?',
            text: "Perderás estos bellos productos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, ¡eliminar!',
            cancelButtonText: 'Nooo!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Listos para un nuevo carrito',
                    'Carrito vacío',
                    'success',
                    setCarrito([])
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Carrito a salvo :)',
                    'error'
                )
            }
        })
    }



    const totalCompra = () => {
        return carrito.reduce((acc, el) => acc + el.cantidad * el.precio, 0)
    }

    const editarCantidad = (id, num) => {
        const carritoEditado = carrito.slice()
        const prodModificado = carritoEditado.find((prod) => prod.id === id)


        if (num === -1) {
            prodModificado.cantidad += num
            toast.error("Quitado del carito 💔",
                {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "foo-bar",
                    theme: "dark",
                    transition: Zoom,
                    autoClose: 1500
                })
        } else {
            prodModificado.cantidad += num
            toast.success("Agregado al carito 💚",
                {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    className: "foo-bar",
                    theme: "dark",
                    transition: Zoom,
                    autoClose: 1500
                })
        }

        setCarrito(carritoEditado)
    }


    return (
        <CarritoContexto.Provider
            value={{
                carrito,
                agregarAlCarrito,
                existeEnCarrito,
                totalCantidad,
                vaciarCarritoAlerta,
                vaciarCarrito,
                removerItem,
                totalCompra,
                editarCantidad
            }}>

            {children}

        </CarritoContexto.Provider>
    )
}

