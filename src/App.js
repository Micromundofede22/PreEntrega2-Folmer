import "./App.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarritoContexto } from "./Context/CarritoContexto";
import { useState } from "react";




function App() {

const[carrito,setCarrito]=useState([])
// centralizo mi funcionalidad de agregar, asi distintos componentes acceden a esto

const agregarAlCarrito=(item)=>{
    setCarrito([...carrito, item])
}

const existeEnCarrito= (id)=>{
  return carrito.some((el)=> el.id === id)
}

  return (
    <CarritoContexto.Provider value={{
      carrito,
      agregarAlCarrito,
      existeEnCarrito
    }}>

      <BrowserRouter>
        <div >
          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer fondo={""} categoriaSub={""} />} />
            <Route path="/productos/:categoriaId" element={<ItemListContainer fondo={""} categoriaSub={""} />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Navigate to={"/productos"} />} />
          </Routes>

          <Footer />
        </div>

      </BrowserRouter>

    </CarritoContexto.Provider>

  );
};

export default App;
