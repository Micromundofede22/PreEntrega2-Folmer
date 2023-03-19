import "./App.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";




function App() {
  return (
    <BrowserRouter>

      <div className='app-container'>
        <NavBar />

      
      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Navigate to={"/productos"}/> }/>

      </Routes>
      </div>
      <Footer />
 
    </BrowserRouter>

  );
};

export default App;
