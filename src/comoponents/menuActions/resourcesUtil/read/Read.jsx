import { useState } from "react"
import texts from "../../../auxility/texts/texts"
import "./read.css"
import { Button } from "react-bootstrap"

function Read() {
  const [textsRead, setTexts] = useState(texts)
  const [selectedLevel, setSelectedLevel] = useState("")
  const [modalText, setModalText] = useState("")
  const [modalTranslation, setModalTranslation] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value)
  }

  const handleClick = () => {
    // console.log("Nivel seleccionado:", selectedLevel)
    if (selectedLevel === "easy") {
      setTexts(texts.filter((text) => text.type === 1))
    }
    if (selectedLevel === "medium") {
      setTexts(texts.filter((text) => text.type === 2))
    }
    if (selectedLevel === "hard") {
      setTexts(texts.filter((text) => text.type === 3))
    }
  }

  const openModal = (text, translation) => {
    setModalText(text)
    setModalTranslation(translation)
    setShowTranslation(false)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalText("")
    setModalTranslation("")
  }

  const toggleTranslation = () => {
    setShowTranslation((prev) => !prev)
  }

  return (
    <div className="read-container">
      <h3 className="title">Practica tu lectura</h3>
      <p>
        <b>Escoge el nivel que deseas practicar</b>
      </p>
      <label htmlFor="easy" className="select-level">
        <input
          type="radio"
          name="level"
          value="easy"
          id="easy"
          onChange={handleLevelChange}
          className="select-level"
        />
        Fácil
      </label>
      <label htmlFor="medium" className="select-level">
        <input
          type="radio"
          name="level"
          value="medium"
          id="medium"
          onChange={handleLevelChange}
          className="select-level"
        />
        Medio
      </label>
      <label htmlFor="hard" className="select-level">
        <input
          type="radio"
          name="level"
          value="hard"
          id="hard"
          onChange={handleLevelChange}
          className="select-level"
        />
        Difícil
      </label>
      <Button
        className="button"
        onClick={handleClick}
        variant="btn btn-success"
      >
        Vamos
      </Button>
      <div>
        {textsRead.map((text, index) => (
          <div key={index}>
            <p
              onClick={() => openModal(text.text, text.translate)}
              style={{ cursor: "pointer" }}
            >
              {index + 1 + "." + " " + text.text.slice(0, 80) + "..."}
            </p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4 className="title">Texto Completo</h4>
            <p>{modalText}</p>

            <Button className="btn-text" onClick={toggleTranslation} variant="btn btn-success">
              {showTranslation ? "Ocultar Traducción" : "Ver Traducción"}{" "}
            </Button>

            {showTranslation && <p>{modalTranslation}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default Read
