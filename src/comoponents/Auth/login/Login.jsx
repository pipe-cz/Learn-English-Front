import AuthButtons from "../../../shared/AuthButtons"
import "./login.css"
import { axiosInstance as axios } from "../../../config/axios"
import { setToken as localStoreToken } from "../../../utils/token"
import { useTokenStore } from "../../../store/tokenStore"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../../utils/users"
import { privates } from "../../../routes/routes"

function Login() {
  const { setToken } = useTokenStore((state) => state)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const userData = Object.fromEntries(data.entries())
    const result = await axios.post("/api/login", userData)
    if (result.status === 200) {
      localStoreToken(result.data.token)
      setToken(result.data.token)
      setUser(result.data.user)
      navigate(privates.PROFILE)
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <AuthButtons />
          <div className="login-form">
            <form onSubmit={login}>
              <div className="mb-3">
                <label htmlFor="txtEmail" className="form-label">
                  Correo electrónico
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="txtEmail"
                  placeholder="micorreo@ejemplo.com"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtPassword" className="form-label">
                  Contraseña
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="txtPassword"
                  placeholder="123456"
                  name="password"
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button className="btn btn-success">Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
