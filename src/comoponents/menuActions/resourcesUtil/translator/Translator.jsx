import { ArrowLeftRight, Megaphone, Mic } from "react-bootstrap-icons"
import { useRef, useState } from "react"
import "./translator.css"
import { Alert } from "react-bootstrap" 

function Translator() {
  const [language1, setLanguage1] = useState('English')
  const [language2, setLanguage2] = useState("Spanish")
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const fromText = useRef(null)
  const toText = useRef(null)
  const selectFirst = useRef(null)
  const selectSecond = useRef(null)

  const languages = [
    { code: "en-GB", name: "English" },
    { code: "es-ES", name: "Spanish" },
  ]

  const handleClick = () => {
    setLanguage1(selectSecond.current.value)
    setLanguage2(selectFirst.current.value)
    if (!toText.current.value) return
    fromText.current.value = to
    toText.current.value = from
  }

  const handleTranslate = async () => {
    if (!fromText.current.value) {
      setShowAlert(true) 
      return
    }
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${fromText.current.value}&langpair=${selectFirst.current.value}|${selectSecond.current.value}`
    )
    const data = await res.json()
    toText.current.value = data.responseData.translatedText
    setFrom(fromText.current.value)
    setTo(data.responseData.translatedText)
  }

  return (
    <div className="translator-container">
      <h3>Translator</h3>
      <div className="header">
        <select
          ref={selectFirst}
          className="first"
          value={language1}
          onChange={(e) => setLanguage1(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </select>
        <button onClick={handleClick} className="iconButton">
          <ArrowLeftRight />
        </button>
        <select
          ref={selectSecond}
          className="second"
          value={language2}
          onChange={(e) => setLanguage2(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div className="container-textArea">
        <div>
          <textarea ref={fromText} className="fromText textarea"></textarea>
          <div>
            <button className="iconButton"><Megaphone /></button>
            <button className="iconButton"><Mic /></button>
          </div>
        </div>
        <div>
          <textarea ref={toText} className="toText textarea"></textarea>
          <div>
            <button className="iconButton"><Megaphone /></button>
          </div>
        </div>
      </div>
      <button className="translate iconButton" onClick={handleTranslate}>Translate</button>
      
      <Alert 
        variant="danger" 
        show={showAlert} 
        onClose={() => setShowAlert(false)} 
        dismissible
      >
        Por favor escriba una palabra para traducir.
      </Alert>
    </div>
  )
}

export default Translator
