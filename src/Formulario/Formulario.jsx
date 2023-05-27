export function Formulario() {
    return (
        <>
            <div
                className="container-fluid d-flex align-items-center justify-content-center">
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
                                    className="form-control"
                                    id="dateInput"
                                    name="date"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="timeInput" className="form-label">
                                    Hora
                                </label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="timeInput"
                                    name="time"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">
                                    Nombres
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    name="name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    name="email"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Agendar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}