import { useEffect, useState } from "react";
import words from "../../../auxility/words/words";
import backImage from "../../../../assets/imgWords/dorsal.webp"; 
import "./memoryGame.css";
import { Alert } from "react-bootstrap"; 
function MemoryGame() {
  const [wordsMemory, setWordsMemory] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [allPairsMatched, setAllPairsMatched] = useState(false); 
  const getRandomWords = () => {
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, 6);
    const cards = selectedWords
      .flatMap((word) => [
        { ...word, id: `${word.id}-img`, type: "image" },
        { ...word, id: `${word.id}-word`, type: "word" },
      ])
      .sort(() => Math.random() - 0.5);
    setWordsMemory(cards);
  };

  useEffect(() => {
    getRandomWords();
  }, []);

  const flipCard = (cardId) => {
    if (flippedCards.length < 2 && !flippedCards.includes(cardId)) {
      setFlippedCards((prev) => [...prev, cardId]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setAttempts((prev) => prev + 1);
      const [firstCardId, secondCardId] = flippedCards;
      const firstCard = wordsMemory.find((card) => card.id === firstCardId);
      const secondCard = wordsMemory.find((card) => card.id === secondCardId);

      if (firstCard && secondCard && firstCard.english === secondCard.english) {
        setMatchedPairs((prev) => {
          const newMatchedPairs = [...prev, firstCard.english];
          if (newMatchedPairs.length === 6) {
            setAllPairsMatched(true);
          }
          return newMatchedPairs;
        });
      }

      const timeout = setTimeout(() => {
        setFlippedCards([]);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [flippedCards, wordsMemory]);

  return (
    <div className="memory-game-container">
      <h2>Juego de Memoria</h2>
      <h4>Memoriza la imagen con la palabra correspondiente</h4>
      <div className="card-grid">
        {wordsMemory.map((card) => (
          <div
            key={card.id}
            className={`card ${
              flippedCards.includes(card.id) ||
              matchedPairs.includes(card.english)
                ? "flipped"
                : ""
            }`}
            onClick={() => flipCard(card.id)}
          >
            {flippedCards.includes(card.id) ||
            matchedPairs.includes(card.english) ? (
              card.type === "image" ? (
                <img src={card.img} alt={card.english} className="card-image" />
              ) : (
                <p className="card-word">{card.english}</p>
              )
            ) : (
              <img src={backImage} alt="Card Back" className="card-back" />
            )}
          </div>
        ))}
      </div>
      <div className="attempts">
        <h4>Intentos: {attempts}</h4>
        <h4>Parejas encontradas: {matchedPairs.length} / 6</h4>
      </div>
      {allPairsMatched && ( 
        <Alert variant="success" className="mt-3">
          ¡Felicidades! Has encontrado todas las parejas.
        </Alert>
      )}
      <button onClick={() => location.reload()} className="btn btn-success">De nuevo!!!</button>
    </div>
  );
}

export default MemoryGame;
