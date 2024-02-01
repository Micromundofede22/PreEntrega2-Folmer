import { BrowserRouter } from "react-router-dom";
// import { useContext } from 'react';
// import { LoginContext } from '../Context/LoginContext';
// import PrivateRutes from './PrivateRutes';
import PublicRutes from "./PublicRutes";



const AppRouter = () => {

    // const {user}= useContext(LoginContext)

    return (

        <BrowserRouter>

            // {
            //     user.logged
            //         ? <PrivateRutes/>
            //         : 
            // }
        <PublicRutes/>

        </BrowserRouter>
    )
}

export default AppRouter
