import { Outlet } from "react-router-dom"
import cardDataResources from "../../../auxility/cardDates/cardDataResources"
import CategoryCard from "../../../auxility/categoryCard/CategoryCard"
import "./resources.css"

function Resources() {
  return (
    <div className="resources-container">
      <h1>Recursos</h1>
      <div className="card-resources-container">
      {cardDataResources.map((card, index) => (
        <CategoryCard
        key={index}
        title={card.title}
        imageSrc={card.imageSrc}
        description={card.description}
        route={card.route}
        />
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Resources
