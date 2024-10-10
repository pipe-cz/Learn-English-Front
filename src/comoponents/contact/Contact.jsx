import FormContact from "./FormContact"
import Redes from "./Redes"
import "./contact.css"


function Contact() {
  return (
    <div className="contact-container p-2 d-flex flex-column align-items-center">
      <h2>Contactos</h2>
      <p>
        ¡Estamos aquí para ayudarte en tu viaje de aprendizaje del inglés! Si
        tienes alguna pregunta, sugerencia o simplemente quieres ponerte en
        contacto con nosotros, no dudes en hacerlo. Estamos encantados de
        escucharte y responder a cualquier consulta que tengas.
        <br />
        <br />
        Puedes contactarnos de las siguientes maneras:
        <br />
        <br />
        Envíanos un correo electrónico a<b> manel_ceron@soy.sena.edu.co</b>
        <br />
        <br />
        Completa el formulario de contacto a continuación y nos pondremos en
        contacto contigo lo antes posible.
        <br />
        <FormContact />
      </p>
      Síguenos en nuestras redes sociales para estar al tanto de las últimas
      noticias, actualizaciones y consejos sobre aprendizaje del inglés.
      ¡Esperamos tener noticias tuyas pronto!
     <Redes />
    </div>
  )
}

export default Contact
