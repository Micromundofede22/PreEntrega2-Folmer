
import Login from "../components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Registrarme from "../components/Registrarme/Registrarme";



const PublicRutes = () => {

    return (
        
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registrarme />} />
                <Route path="*" element={<Navigate to={"/login"} />} />

            </Routes>
            
    )
}

export default PublicRutes