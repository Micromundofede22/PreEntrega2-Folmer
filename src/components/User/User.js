import "./User.scss"
import { useContext } from "react"
import { LoginContext } from "../../Context/LoginContext"


const User = () => {

    const { user, logout } = useContext(LoginContext)

    return (
        <div className={user ? "user-active" : "user"}>
            <h6 className="m-0"><span className="fs-2 opacity-75 ms-2">👤</span>{user.email}</h6>
            <button className="btn btn-online fw-bold m-0" onClick={logout}>Cerrar sesión</button>
        </div>
    )
}

export default User;