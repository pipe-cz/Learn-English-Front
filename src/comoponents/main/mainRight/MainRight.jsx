import "./mainRight.css"
import image from "../../../assets/images/imglateral.jpg"

function MainRight() {
  return (
    <div className="right-container">
      <h3>Sabias que:</h3>
      Más del 60% del vocabulario inglés proviene del latín. <br /><br />
      El inglés es conocido por tener una amplia gama de sinónimos para expresar una sola idea. <br /><br />
      Existen palabras en inglés que no tienen equivalente exacto en otros idiomas. <br /><br />
      El inglés es un idioma en constante evolución, con nuevas palabras siendo agregadas al diccionario regularmente. <br /><br />
      <img src={image} alt=""  width="300"/>
    </div>
    
)
}

export default MainRight