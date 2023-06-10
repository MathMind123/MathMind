import { useState } from "react";
import Swal from "sweetalert2";

export function Formulario() {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [dataUser, setDataUser] = useState({
    fecha: "",
    hora: "",
    nombre: "",
    correo: "",
  });

  const handleChange = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const onSave = (e) => {
    e.preventDefault();

    // Validar campos
    if (
      dataUser.fecha === "" ||
      dataUser.hora === "" ||
      dataUser.nombre === "" ||
      dataUser.correo === ""
    ) {
      setIsError(true);
      setMessage("Todos los campos son obligatorios");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    // Validar longitud del nombre
    if (dataUser.nombre.length < 10) {
      setIsError(true);
      setMessage("El nombre debe tener al menos 10 caracteres");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    // Si todas las validaciones son correctas, mostrar mensaje de éxito
    setIsError(false);
    setMessage("");
    Swal.fire({
      title: "Cita Agendada",
      text: "La cita se ha agendado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const renderErrorMessage = (fieldName) => {
    if (isError && dataUser[fieldName] === "") {
      return (
        <div style={{ color: "red" }}>Este campo es obligatorio.</div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Agendamiento</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="dateInput" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  className={`form-control ${
                    isError && dataUser.fecha === "" ? "is-invalid" : ""
                  }`}
                  id="fecha"
                  name="fecha"
                  onChange={handleChange}
                  value={dataUser.fecha}
                />
                {renderErrorMessage("fecha")}
              </div>
              <div className="mb-3">
                <label htmlFor="timeInput" className="form-label">
                  Hora
                </label>
                <input
                  type="time"
                  className={`form-control ${
                    isError && dataUser.hora === "" ? "is-invalid" : ""
                  }`}
                  id="hora"
                  name="hora"
                  onChange={handleChange}
                  value={dataUser.hora}
                />
                {renderErrorMessage("hora")}
              </div>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Nombres
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  id="nombre"
                  name="nombre"
                  className={`form-control ${
                    isError && (dataUser.nombre === "" || dataUser.nombre.length < 10)
                      ? "is-invalid"
                      : ""
                  }`}
                  onChange={handleChange}
                  value={dataUser.nombre}
                />
                {renderErrorMessage("nombre")}
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    isError && dataUser.correo === "" ? "is-invalid" : ""
                  }`}
                  id="correo"
                  name="correo"
                  onChange={handleChange}
                  value={dataUser.correo}
                />
                {renderErrorMessage("correo")}
              </div>
              <div style={{ color: isError ? "red" : "green" }}>{message}</div>
              <button type="submit" className="btn btn-primary" onClick={onSave}>
                Agendar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
