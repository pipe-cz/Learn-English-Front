import { useEffect, useState } from "react"
import words from "../../auxility/words/words"
import "./evaluation.css"
import { axiosInstance as axios } from "../../../config/axios"
import { Alert } from "react-bootstrap" // Asegúrate de importar Alert de react-bootstrap

function Evaluations() {
  const [wordsEvaluation, setWordsEvaluation] = useState([])
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [optionsForQuestions, setOptionsForQuestions] = useState({})
  const [showAlert, setShowAlert] = useState(false) // Estado para manejar la visibilidad del alert

  const getRandomWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5)
    const randomWords = shuffledWords.slice(0, 20)
    setWordsEvaluation(randomWords)

    const options = {}
    randomWords.forEach((word) => {
      options[word.id] = getShuffledOptions(word, randomWords)
    })
    setOptionsForQuestions(options)
  }

  useEffect(() => {
    getRandomWords()
  }, [])

  const getShuffledOptions = (correctWord, allWords) => {
    let incorrectOptions = allWords
      .filter((word) => word.id !== correctWord.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    const options = [...incorrectOptions, correctWord].sort(
      () => Math.random() - 0.5
    )
    return options
  }

  const handleCheckboxChange = (id, value) => {
    setAnswers({ ...answers, [id]: value })
  }

  const handleInputChange = (id, value) => {
    setAnswers({ ...answers, [id]: value })
  }

  const saveQualification = async (answers) => {
    const response = await axios.post("/api/qualifications", answers)
    console.log(response)
  }

  const evaluateAnswers = () => {
    const allQuestions = wordsEvaluation
      .slice(0, 10)
      .map((word) => word.id)
      .concat(wordsEvaluation.slice(10, 20).map((word) => word.id))

    const unansweredQuestions = allQuestions.filter((id) => !answers[id])

    if (unansweredQuestions.length > 0) {
      setShowAlert(true) // Mostrar el alert
      return
    }

    setShowAlert(false) // Asegúrate de ocultar el alert si todas las preguntas han sido respondidas
    let correctAnswers = 0
    let incorrectAnswers = {
      multipleChoice: [],
      translationToSpanish: [],
      translationToEnglish: [],
    }

    wordsEvaluation.slice(0, 10).forEach((word) => {
      const correctAnswer = word.english.toLowerCase()
      const userAnswer = answers[word.id] ? answers[word.id].toLowerCase() : ""

      if (userAnswer === correctAnswer) {
        correctAnswers++
      } else {
        incorrectAnswers.multipleChoice.push({ word, userAnswer })
      }
    })

    wordsEvaluation.slice(10, 15).forEach((word) => {
      const correctAnswer = word.spanish.toLowerCase()
      const userAnswer = answers[word.id] ? answers[word.id].toLowerCase() : ""

      if (userAnswer === correctAnswer) {
        correctAnswers++
      } else {
        incorrectAnswers.translationToSpanish.push({ word, userAnswer })
      }
    })

    wordsEvaluation.slice(15, 20).forEach((word) => {
      const correctAnswer = word.english.toLowerCase()
      const userAnswer = answers[word.id] ? answers[word.id].toLowerCase() : ""

      if (userAnswer === correctAnswer) {
        correctAnswers++
      } else {
        incorrectAnswers.translationToEnglish.push({ word, userAnswer })
      }
    })

    setResults({ correct: correctAnswers, incorrect: incorrectAnswers })
    const answersData = {
      correct: correctAnswers,
      errors: Object.values(incorrectAnswers).flat().length,
    }
    saveQualification(answersData)
  }

  return (
    <div className="evaluation-container">
      <h2>Evaluación</h2>

      <h4 className="subtitle">Selecciona la palabra en inglés correcta</h4>
      <div className="question-section multiple-choice">
        {wordsEvaluation.slice(0, 5).map((word) => (
          <div className="question" key={word.id}>
            <p className="word-word">{word.spanish}</p>
            <div>
              {optionsForQuestions[word.id] &&
                optionsForQuestions[word.id].map((option) => (
                  <div className="answer-option" key={option.id}>
                    <input
                      className="checkbox-option"
                      type="radio"
                      id={`question-${word.id}-${option.english}`}
                      name={`question-${word.id}`}
                      value={option.english}
                      onChange={() =>
                        handleCheckboxChange(word.id, option.english)
                      }
                    />
                    <label
                      className="checkbox-label"
                      htmlFor={`question-${word.id}-${option.english}`}
                    >
                      {option.english}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <h4 className="subtitle">
        Selecciona la palabra en inglés correcta para la imagen
      </h4>
      <div className="question-section multiple-choice">
        {wordsEvaluation.slice(5, 10).map((word) => (
          <div className="question" key={word.id}>
            <img src={word.img} alt={word.spanish} width="100" height="100" />
            <div>
              {optionsForQuestions[word.id] &&
                optionsForQuestions[word.id].map((option) => (
                  <div className="answer-option" key={option.id}>
                    <input
                      className="checkbox-option"
                      type="radio"
                      id={`question-${word.id}-${option.english}`}
                      name={`question-${word.id}`}
                      value={option.english}
                      onChange={() =>
                        handleCheckboxChange(word.id, option.english)
                      }
                    />
                    <label
                      className="checkbox-label"
                      htmlFor={`question-${word.id}-${option.english}`}
                    >
                      {option.english}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="question-section translation-section">
        <div className="translation">
          <h4>Escribe la traducción en español</h4>
          {wordsEvaluation.slice(10, 15).map((word) => (
            <div className="question" key={word.id}>
              <p className="word-word">{word.english}</p>
              <input
                type="text"
                placeholder="Escribe la traducción en español"
                onChange={(e) => handleInputChange(word.id, e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="translation">
          <h4>Escribe la traducción en inglés</h4>
          {wordsEvaluation.slice(15, 20).map((word) => (
            <div className="question" key={word.id}>
              <p className="word-word">{word.spanish}</p>
              <input
                type="text"
                placeholder="Escribe la traducción en inglés"
                onChange={(e) => handleInputChange(word.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <p>Por favor, responde todas las preguntas antes de calificar.</p>
        </Alert>
      )}
      <button className="btn btn-success btn-evaluation" onClick={evaluateAnswers}>
        Calificar evaluación
      </button>


      {results && (
        <div className="results">
          <h4>Resultados</h4>
          <p>Respuestas correctas: {results.correct}</p>
          <p>
            Respuestas incorrectas:{" "}
            {Object.values(results.incorrect).flat().length}
          </p>

          {results.incorrect.multipleChoice.length > 0 && (
            <div>
              <h4>Errores en Selección Múltiple:</h4>
              <ul>
                {results.incorrect.multipleChoice.map(
                  ({ word, userAnswer }) => (
                    <li key={word.id}>
                      Palabra: {word.spanish} | Respuesta correcta:{" "}
                      {word.english} | Tu respuesta:{" "}
                      {userAnswer || "Sin respuesta"}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {results.incorrect.translationToSpanish.length > 0 && (
            <div>
              <h4>Errores en Traducción Inglés a Español:</h4>
              <ul>
                {results.incorrect.translationToSpanish.map(
                  ({ word, userAnswer }) => (
                    <li key={word.id}>
                      Palabra: {word.english} | Respuesta correcta:{" "}
                      {word.spanish} | Tu respuesta:{" "}
                      {userAnswer || "Sin respuesta"}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {results.incorrect.translationToEnglish.length > 0 && (
            <div>
              <h4>Errores en Traducción Español a Inglés:</h4>
              <ul>
                {results.incorrect.translationToEnglish.map(
                  ({ word, userAnswer }) => (
                    <li key={word.id}>
                      Palabra: {word.spanish} | Respuesta correcta:{" "}
                      {word.english} | Tu respuesta:{" "}
                      {userAnswer || "Sin respuesta"}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
           <button onClick={() => window.location.reload()} className="btn btn-success">
            De nuevo!!!
          </button>
        </div>
      )}
    </div>
  )
}

export default Evaluations
