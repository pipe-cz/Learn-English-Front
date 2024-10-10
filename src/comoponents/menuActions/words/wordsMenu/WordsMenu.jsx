import { useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import Verbs from "./verbs/Verbs"
import Adjectives from "./adjectives/Adjectives"
import Nouns from "./nouns/Nouns"
import "./wordsMenu.css"

function WordsMenu() {
  const [selectedComponent, setSelectedComponent] = useState(null)

  const handleClickVerbs = () => {
    setSelectedComponent("verbs")
  }

  const handleClickAdjectives = () => {
    setSelectedComponent("adjectives")
  }

  const handleClickNouns = () => {
    setSelectedComponent("nouns")
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case "verbs":
        return <Verbs />
      case "adjectives":
        return <Adjectives />
      case "nouns":
        return <Nouns />
      default:
        return null
    }
  }

  return (
    <div className="wordsMenu-container">
      <Navbar className="links">
          <Nav className="position-absolute top-0 start-50 translate-middle mt-2">
            <Nav.Link className="link-menu-words" onClick={handleClickVerbs}>Verbos</Nav.Link>
            <Nav.Link className="link-menu-words" onClick={handleClickAdjectives}>Adjetivos</Nav.Link>
            <Nav.Link className="link-menu-words" onClick={handleClickNouns}>Sustantivos</Nav.Link>
          </Nav>
      </Navbar>
      {renderComponent()}

 
    </div>
  )
}

export default WordsMenu
