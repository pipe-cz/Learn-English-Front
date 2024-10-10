import React, { useState } from "react"; // Importa useState
import AuthButtons from "../../../shared/AuthButtons";
import "../login/login.css";
import { axiosInstance as axios } from "../../../config/axios";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap"; // Importa Alert de react-bootstrap

function Register() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, message: "", type: "" }); // Estado para la alerta

  const validatePassword = (password, passwordValidation) => {
    return password === passwordValidation;
  };

  const register = async (userData = "") => {
    const response = await axios.post("/api/register", userData);
    if (response.status === 201) {
      setAlert({
        show: true,
        message: "Registro exitoso",
        type: "success"
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Espera 2 segundos antes de redirigir
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userData = Object.fromEntries(data.entries());
    if (!validatePassword(userData.password, userData.txtPasswordValidation)) {
      setAlert({
        show: true,
        message: "Las contraseñas no coinciden",
        type: "danger"
      });
      return;
    }
    register(userData);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <AuthButtons />
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="txtNombre" className="form-label">
                  Nombre
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="txtNombre"
                  placeholder="Juanito Pérez"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtEmail" className="form-label">
                  Correo electrónico
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="txtEmail"
                  placeholder="micorreo@ejemplo.com"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtPassword" className="form-label">
                  Contraseña
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="txtPassword"
                  placeholder="123456"
                  name="password"
                  min={6}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="txtPasswordValidation" className="form-label">
                  Validar contraseña
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="txtPasswordValidation"
                  placeholder="123456"
                  name="txtPasswordValidation"
                  min={6}
                />
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button className="btn btn-success">Registrarme</button>
              </div>
            </form>
            {alert.show && (
              <Alert variant={alert.type} onClose={() => setAlert({ show: false })} dismissible>
                {alert.message}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
