import { createContext, useState } from "react";


export const CarritoContexto = createContext()



export const CarritoProveedor = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
    }

    const removerItem=(id)=>{
      setCarrito(carrito.filter(prod=> prod.id !== id))
    }

    const existeEnCarrito = (id) => {
        return carrito.some((el) => el.id === id)
    }

    const totalCantidad = () => {
        return carrito.reduce((acc, el) => acc + el.cantidad, 0)
    }

    const vaciarCarrito= () =>{
        setCarrito([])
    }

    const totalCompra=()=>{
        return carrito.reduce((acc,el)=> acc + el.cantidad * el.precio, 0)
    }

    const editarCantidad= (id, num) =>{
        const carritoEditado= carrito.slice()
        const prodModificado= carritoEditado.find((prod)=> prod.id === id)
        
        prodModificado.cantidad += num

        setCarrito(carritoEditado)
    }

    return (
        <CarritoContexto.Provider
            value={{carrito,
                agregarAlCarrito,
                existeEnCarrito,
                totalCantidad,
                vaciarCarrito,
                removerItem,
                totalCompra,
                editarCantidad
            }}>

                {children}

        </CarritoContexto.Provider>
    )
}

