import "./App.scss"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "./components/Carousel/Carousel";


function App() {
  return (
    <div className='app-container'>
        <NavBar/>
        <ItemListContainer gree={"Somos decoración y reflexión"} />
        <Carousel></Carousel>
    </div>
  );
}

export default App;
