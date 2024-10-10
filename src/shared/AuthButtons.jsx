import user from "../assets/icons/user-register.svg"
import login from "../assets/icons/login.svg"
import { Link } from "react-router-dom"
import { publics } from "../routes/routes"
import ".././comoponents/Auth/login/login.css"

function AuthButtons() {
   return (
      <>
         <div className="login-buttons">
            <Link to={publics.LOGIN} className="bntLink">
               <button className="btn btn-default">
                  <img src={login} alt="Login icon" /> Inicio de sesión
               </button>
            </Link>

            <Link to={publics.REGISTER} className="bntLink p-2">
               <button className="btn btn-default">
                  <img src={user} alt="Register icon" /> Registro
               </button>
            </Link>
         </div>
      </>
   )
}

export default AuthButtons
