import CategoryCard from "../../../auxility/categoryCard/CategoryCard"
import "./exercises.css"
import cardDataExersices from "../../../auxility/cardDates/cardDataExersices"

function Exersices() {
  return (
    <div className="exercises-container">
      <h1>Ejercicios</h1>
      <div className="cards-exercises-container">
        {cardDataExersices.map((card, index) => (
          <CategoryCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
            route={card.route}
          />
        ))}
      </div>
    </div>
  )
}

export default Exersices
