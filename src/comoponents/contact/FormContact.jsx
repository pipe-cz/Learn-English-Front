import { Button, Form } from "react-bootstrap"
import "./contact.css"
import emailjs from "@emailjs/browser"
import { useRef } from "react"

function FormContact() {
  const refForm = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(refForm.current)
    // console.log("funciona")
    const serviceId = "service_wvdo0pd"
    const templateId = "template_ysxlq96"
    const apiKey = "pPHWY2pHLPkwTSIH2"

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => {
        console.log(result.text)
      })
      .catch((error) => {
        console.log(error.text)
      })
      refForm.current.reset()
  }

  return (
    <div className="form-contact">
      <form action="" onSubmit={handleSubmit} ref={refForm}>
        <fieldset>
          <label htmlFor="user_name"><b>Nombre:</b></label>
          <input type="text" id="user_name" name="user_name" required />
        </fieldset>

        <br />

        <fieldset>
          <label htmlFor="email"><b>Correo Electrónico:</b></label>
          <input type="email" id="email" name="email" required />
        </fieldset>

        <br />

        <fieldset>
          <label htmlFor="message"><b>Asunto:</b></label>
          <textarea id="message" name="message" required rows="2"></textarea>
        </fieldset>


        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default FormContact
