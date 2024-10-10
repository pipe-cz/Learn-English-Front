import { useState, useEffect } from "react";
import words from "../../../auxility/words/words";
import "./relatioGame.css";
import { Alert } from "react-bootstrap"; 

function RelationGame() {
  const [wordsGame, setWordsGame] = useState([]);
  const [selectedPairs, setSelectedPairs] = useState({});
  const [results, setResults] = useState(null);
  const [showAlert, setShowAlert] = useState(false); 
  const [alertMessage, setAlertMessage] = useState(""); 

  const getRandomWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const randomWords = shuffledWords.slice(0, 10);
    setWordsGame(randomWords);
  };

  useEffect(() => {
    getRandomWords();
  }, []);

  const handleSelect = (imgSrc, englishWord) => {
    setSelectedPairs((prev) => ({ ...prev, [imgSrc]: englishWord }));
  };

  const checkResults = () => {
    if (Object.keys(selectedPairs).length !== wordsGame.length) {
      setAlertMessage("Por favor, selecciona una palabra para cada imagen antes de verificar.");
      setShowAlert(true);
      return;
    }

    let correct = 0;
    const incorrectPairs = [];

    wordsGame.forEach((word) => {
      if (selectedPairs[word.img] === word.english) {
        correct++;
      } else {
        incorrectPairs.push({
          english: word.english,
          imgSrc: word.img,
          selectedWord: selectedPairs[word.img],
        });
      }
    });

    setResults({ correct, incorrectPairs });
    setShowAlert(false); 
  };

  return (
    <div className="game-container">
      <h2>Juego de relación</h2>
      <h4>Relaciona la imagen con una palabra</h4>


      <div className="game-grid">
        {wordsGame.map((word) => (
          <div key={word.id} className="word-pair">
            <select
              onChange={(e) => handleSelect(word.img, e.target.value)}
              className="select-word"
              >
              <option value="">Selecciona la palabra</option>
              {wordsGame.map((option) => (
                <option key={option.id} value={option.english}>
                  {option.english}
                </option>
              ))}
            </select>

            <img
              src={word.img}
              alt={word.english}
              className="game-image"
              />
          </div>
        ))}
      </div>
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}

      <button onClick={checkResults} className="btn btn-success">
        Verificar respuestas
      </button>

      {results && (
        <div className="results">
          <h2>Resultados:</h2>
          <p>Correctas: {results.correct} / 10</p>

          {results.incorrectPairs.length > 0 && (
            <div>
              <h4>Errores:</h4>
              {results.incorrectPairs.map((pair, index) => (
                <div key={index}>
                  <p>
                    Imagen seleccionada incorrectamente: "{pair.selectedWord}",
                    pero la correcta es "{pair.english}".
                  </p>
                </div>
              ))}
            </div>
          )}
           <button onClick={() => window.location.reload()} className="btn btn-success">
             De nuevo!!!
           </button>
        </div>
      )}
    </div>
  );
}

export default RelationGame;
