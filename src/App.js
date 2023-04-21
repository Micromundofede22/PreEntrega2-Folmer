import "./App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoProveedor } from "./Context/CarritoContexto";
import { LoginProvider } from "./Context/LoginContext";
import AppRouter from "./routes/AppRouter";





function App() {

  return (
    <LoginProvider>
      <CarritoProveedor>

        <AppRouter />
        
      </CarritoProveedor>
    </LoginProvider>
  );
};

export default App;
