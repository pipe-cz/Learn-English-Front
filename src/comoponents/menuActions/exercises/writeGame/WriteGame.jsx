import { useEffect, useState } from "react";
import words from "../../../auxility/words/words";
import Alert from 'react-bootstrap/Alert';
import './writeGame.css'; 

function WriteGame() {
  const [writeWords, setWriteWords] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [incorrectPairs, setIncorrectPairs] = useState([]);
  const [showAlert, setShowAlert] = useState(false); 

  const getRandomWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const randomWords = shuffledWords.slice(0, 10);
    setWriteWords(randomWords);
  };

  useEffect(() => {
    getRandomWords();
  }, []);

  const handleChange = (id, value) => {
    setUserAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const checkAnswers = () => {
    const allAnswered = writeWords.every(word => userAnswers[word.id]?.trim());

    if (!allAnswered) {
      setShowAlert(true);
      return;
    }

    setShowAlert(false); 

    const correctAnswers = writeWords.filter(word => 
      userAnswers[word.id]?.trim().toLowerCase() === word.spanish.toLowerCase()
    ).length;

    const incorrect = writeWords.filter(word => 
      userAnswers[word.id]?.trim().toLowerCase() !== word.spanish.toLowerCase()
    );

    setResults(correctAnswers);
    setIncorrectPairs(incorrect);
  };

  return (
    <div className="container">
      <h2 className="subtitle">Escribe la traducción</h2>
      <h4 className="subtitle">Escribe la traducción de cada palabra</h4>

      

      <div className="inputs-container">
        {writeWords.map((word) => (
          <div className="word-container" key={word.id}>
            <p className="word">{word.english}</p>
            <input
              type="text"
              className="input"
              onChange={(e) => handleChange(word.id, e.target.value)}
            />
          </div>
        ))}
        {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Por favor, responde todas las palabras antes de verificar.
        </Alert>
      )}
        <button 
          className="btn btn-success" 
          onClick={checkAnswers}
        >
          Verificar respuestas
        </button>
      </div>

      {results !== null && (
        <div className="results-container">
          <h2>Resultados:</h2>
          <p>Correctas: {results} / 10</p>
          {incorrectPairs.length > 0 && (
            <div>
              <h4>Errores:</h4>
              {incorrectPairs.map((pair) => (
                <p key={pair.id}>
                  La traducción de "{pair.english}" es "{pair.spanish}". 
                  Tu respuesta: "{userAnswers[pair.id] || 'sin respuesta'}"
                </p>
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

export default WriteGame;
