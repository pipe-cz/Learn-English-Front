import {Button} from "react-bootstrap"
import "./categorycard.css"
import { Link} from "react-router-dom"

function CategoryCard({title, imageSrc, description, route}) {
  return (
    <div className="card-container">
      <div>
        <img src={imageSrc} alt="imagen" />
      </div>
     
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <Link to={route} >
        <Button variant="btn btn-success">Vamos</Button>
      </Link>
    </div>
)
}

export default CategoryCard