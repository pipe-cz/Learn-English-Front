import "./footer.css"
import logo from "../../assets/images/logo_size.jpg"
import Redes from "../contact/Redes"

function Footer() {
  return (
   
    <div className="footer-container" >
      <div className="d-flex align-items-center">
        <img src={logo} alt="Este es el logo"  width="100"/>
       <h3> LearnEnglish</h3>
      </div>
      <div>
        <p>
          LearnEnglish es una plataforma de aprendizaje de inglés en línea
          diseñada para ayudarte a mejorar tus habilidades de comunicación en
          inglés. ¡Esperamos que disfrutes de tu experiencia de aprendizaje con
          nosotros!
        </p>
      </div>
      <div>
        <Redes/>
      </div>
    </div>
)
}

export default Footer