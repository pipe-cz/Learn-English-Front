import { useState } from "react";
import audios from "../../../auxility/audios/audios";
import "./listen.css"; // Asegúrate de tener este archivo CSS
import { Button } from "react-bootstrap";

function Listen() {
  const [modalAudio, setModalAudio] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const openModal = (audio) => {
    setModalAudio(audio);
    setShowText(false);
    setShowTranslation(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalAudio(null);
  };

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  const toggleTranslation = () => {
    setShowTranslation((prev) => !prev);
  };

  return (
    <div className="listen-container">
      <h4>Escucha y repite</h4>
      <h4>Sugerencia:</h4>
      <p>
        Escucha el audio sin consultar el texto. Escucha después nuevamente el
        audio (utiliza el "control de audio" o bien el icono "altavoz") leyendo
        el texto y fijándote especialmente en aquéllas palabras o expresiones
        que no hayas comprendido.
      </p>
      <div className="audio-container">
        {audios.map((audio, index) => (
          <div className="audio-item" key={index}>
            <h5 onClick={() => openModal(audio)} style={{ cursor: "pointer" }}>
              {index+1+"."+" "}{audio.title}
            </h5>
          </div>
        ))}
      </div>

      {/* Modal para el audio */}
      {isModalOpen && modalAudio && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4 className="title">{modalAudio.title}</h4>
            <audio src={modalAudio.route} controls></audio>

            <Button className="btn-text" onClick={toggleText} variant="btn btn-success">
              {showText ? "Ocultar Texto" : "Ver Texto"}
            </Button>
            {showText && <p>{modalAudio.english}</p>}

            <Button className="btn-text" onClick={toggleTranslation} variant="btn btn-success">
              {showTranslation ? "Ocultar Traducción" : "Ver Traducción"}
            </Button>
            {showTranslation && <p>{modalAudio.spanish}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listen;
