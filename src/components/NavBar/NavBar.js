import Carrito from "../Carrito/Carrito"
import "./NavBar.scss"



export const NavBar= ()=>{
    return(
        <header className="header">
            <div className="header__container">
                <img src="https://github.com/Micromundofede22/PF-Folmer/blob/main/imagenes/logoblanco.png?raw=true" className="header__logo" alt="logo"/>

                <nav className="navbar">
                    <p className="navbar__link">Enlace 1</p>
                    <p className="navbar__link">Enlace 2</p>
                    <p className="navbar__link">Enlace 3</p>
                    
                </nav>

                <Carrito/>

            </div>
        </header>
    )
}