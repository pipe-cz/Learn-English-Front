import { Link } from "react-router-dom"
import logo from "../../assets/images/logo_size.jpg"
import { publics, privates } from "../../routes/routes"
import "./header.css"
import {
  BoxArrowInRight,
  FilePerson,
  Telephone,
  BarChart,
  Person,
} from "react-bootstrap-icons"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useTokenStore } from "../../store/tokenStore"
import { useEffect } from "react"
import { getToken, removeToken } from "../../utils/token"
import { useNavigate } from "react-router-dom"
import { clearUser } from "../../utils/users"

function Header() {
  const navigate = useNavigate()
  const { token, setToken } = useTokenStore((state) => state)

  const logout = async () => {
    removeToken()
    setToken(null)
    clearUser()
  }

  useEffect(() => {
    const token = getToken()
    if (token) {
      setToken(token)
    }
  }, [])

  return (
    <div className="header-container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to={publics.HOME} className="navbar-brand ">
            <img src={logo} alt="this is the logo" width="60" />
            LearnEnglish
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!!token && (
                <Link
                  to={privates.STATS}
                  className="nav-link  text-dark d-flex gap-1 align-items-center"
                  aria-current="page"
                >
                  <BarChart />
                  Estadísticas
                </Link>
              )}

              <Link
                to="aboutus"
                className="nav-link  text-dark d-flex gap-1 align-items-center"
              >
                <FilePerson />
                <span>Nosotros</span>
              </Link>
              <Link
                to="contact"
                className="nav-link text-dark d-flex gap-1 align-items-center"
              >
                <Telephone />
                <span>Contactos</span>
              </Link>

        

              {!!token && (
                <Link
                  to={privates.PROFILE}
                  className="nav-link text-dark d-flex gap-1 align-items-center"
                >
                  <Person />
                  <span>Perfil</span>
                </Link>
              )}

              <div>
              {token ? (
                <Link
                  to={publics.HOME}
                  className="nav-link  text-dark d-flex gap-1 align-items-center"
                  aria-current="page"
                  onClick={logout}
                >
                  <BoxArrowInRight />
                  
                  Cerrar sesión
                </Link>
              ) : (
                <Link
                  to="login"
                  className="nav-link  text-dark d-flex gap-1 align-items-center"
                >
                  <BoxArrowInRight />
                  <span>Iniciar sesión</span>
                </Link>
              )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header





