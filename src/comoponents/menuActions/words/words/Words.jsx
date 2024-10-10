import WordsMenu from "../wordsMenu/WordsMenu"
import "./words.css"

function Words() {

  return (
    <div className="words-container">
      <h2>Palabras</h2>
      <p>Aqui podras encontrar algunas de las palabras mas comunes con su respectivo significado
        para empezar a practicar con estas palabras escoga la sección de la cual quieres aprender
      </p>
      <WordsMenu/>
    </div>
  )
}

export default Words
