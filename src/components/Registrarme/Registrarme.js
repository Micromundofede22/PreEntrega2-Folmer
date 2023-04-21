import "./Registrarme.scss"
import { useContext, useState } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { Link } from "react-router-dom"

const Registrarme = () => {

    const { register } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)

    }


    return (
        <div className="login-contenedor">
            <div className="login">
                <h2> Acceso </h2>
                <hr />

                <form onSubmit={handleSubmit}>

                    <input
                        value={values.email}
                        type={"email"}
                        name="email"
                        placeholder="Tu Email"
                        onChange={handleInput}
                        className="form-control my-2"
                    />

                    <input
                        value={values.password}
                        type={"password"}
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                        className="form-control my-2"
                    />

                    <button className="boton" type="submit">Registrarme</button> <br/>
                    <Link to={"/login"} className="boton">Ya estoy registrado</Link>


                </form>
            </div>

        </div>
    )
}

export default Registrarme