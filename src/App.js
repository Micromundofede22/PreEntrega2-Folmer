import "./App.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CarritoProveedor } from "./Context/CarritoContexto";
import { Carrito } from "./components/SectorCarrito/Carrito";
import OrdenCompra from "./components/OrdenCompra/OrdenCompra";




function App() {

  return (
    <CarritoProveedor>

      <BrowserRouter>
        <div >
          <NavBar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ItemListContainer categoriaSub={""} />} />
            <Route path="/productos/:categoriaId" element={<ItemListContainer categoriaSub={""} />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/ordencompra" element={<OrdenCompra/>}/>
            <Route path="*" element={<Navigate to={"/productos"} />} />
          </Routes>

          <Footer />
        </div>

      </BrowserRouter>

    </CarritoProveedor>
  );
};

export default App;
