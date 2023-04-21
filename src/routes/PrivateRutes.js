import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { NavBar } from '../components/NavBar/NavBar';
import Footer from "../components/Footer/Footer";
import Inicio from "../components/Inicio/Inicio";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { Carrito } from "../components/SectorCarrito/Carrito";
import OrdenCompra from "../components/OrdenCompra/OrdenCompra";
import { Routes, Route, Navigate } from "react-router-dom";
import Whatsapp from '../components/Whatsapp/Whatsapp';
import caricatura from "./../assets/terrario.jpg"




const PrivateRutes = () => {

    return (
        <>
            <NavBar />
            <Whatsapp img={caricatura}/>
        
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<ItemListContainer categoriaSub={""} />} />
                <Route path="/productos/:categoriaId" element={<ItemListContainer categoriaSub={""} />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/ordencompra" element={<OrdenCompra />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            <Footer />
        </>
           
    )
}

export default PrivateRutes