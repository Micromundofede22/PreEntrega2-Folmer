import "./Login.scss"
import { useContext, useState } from "react"
import { LoginContext } from "../../Context/LoginContext"
import { Link } from "react-router-dom"

const Login = () => {

    const { login, googleLogin } = useContext(LoginContext)

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
        login(values)
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
                        className="form-control my-2 campos"
                    />

                    <input
                        value={values.password}
                        type={"password"}
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                        className="form-control my-2 campos"
                    />

                    <button className="boton" type="submit">Ingresar</button>
                    <Link  to={"/registro"} className="boton" >Registrarme</Link>
                </form>

                <button className="boton" onClick={googleLogin}><img src="https://img.icons8.com/clouds/512/google-logo.png" height="30" width="30" alt="google"/> Iniciar sesión con Google</button>
            </div>
        </div>
    )
}

export default Login