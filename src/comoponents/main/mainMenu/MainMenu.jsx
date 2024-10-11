import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { privates, publics } from "../../../routes/routes"
import {
  Controller,
  Book,
  FileWord,
  GraphUpArrow,
} from "react-bootstrap-icons"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import "./mainMenu.css"
import { useTokenStore } from "../../../store/tokenStore"

function MainMenu() {
  const { token } = useTokenStore((state) => state)

  return (
    <div className="menu-container">
      <Link to={publics.EXERSICES} className="text-decoration-none">
        <Navbar>
          <Navbar.Brand href="#" className="link-menu">
            Ejercicios
          </Navbar.Brand>
          <div className="icon-menu">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Ejercicios</Tooltip>
              }
            >
              <span className="d-inline-block">
                <Controller />
              </span>
            </OverlayTrigger>
          </div>
        </Navbar>
      </Link>

      {/* <Link to={privates.RECOMMENDATIONS} className="text-decoration-none">
        <Navbar>
          <Navbar.Brand href="#" className="link-menu">
            Recomendaciones
          </Navbar.Brand>
          <div className="icon-menu">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Recomendaciones</Tooltip>}
            >
              <span className="d-inline-block">
                <Lightbulb />
              </span>
            </OverlayTrigger>
          </div>
        </Navbar>
      </Link> */}

      <Link to={publics.RESOURCES} className="text-decoration-none">
        <Navbar>
          <Navbar.Brand href="#" className="link-menu">
            Recursos útiles
          </Navbar.Brand>
          <div className="icon-menu">
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Recursos útiles</Tooltip>}
            >
              <span className="d-inline-block">
                <Book />
              </span>
            </OverlayTrigger>
          </div>
        </Navbar>
      </Link>

      <Link to={publics.WORDS} className="text-decoration-none">
        <Navbar>
          <Navbar.Brand href="#" className="link-menu">
            Aprende palabras
          </Navbar.Brand>
          <div className="icon-menu">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Aprende palabras</Tooltip>
              }
            >
              <span className="d-inline-block">
                <FileWord />
              </span>
            </OverlayTrigger>
          </div>
        </Navbar>
      </Link>

      {!!token && (
        <Link to={privates.EVALUATIONS} className="text-decoration-none">
          <Navbar>
            <Navbar.Brand href="#" className="link-menu">
              Evaluación
            </Navbar.Brand>
            <div className="icon-menu">
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    Evaluación 
                  </Tooltip>
                }
              >
                <span className="d-inline-block">
                  <GraphUpArrow />
                </span>
              </OverlayTrigger>
            </div>
          </Navbar>
        </Link>
      )}
    </div>
  )
}

export default MainMenu
