import { Link } from "react-router-dom"
import "../Menu/Menu.css"

export function Menu() {
    return (
        <>
            <div className="Menu">
                <nav className="navbar navbar-expand-lg bg-secondary navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="#"> <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/imagenes-961dc.appspot.com/o/logo.png?alt=media&token=e68afa1f-a3fb-4d5b-97f8-68024b3cb50e" alt="Logo"/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Historia"> Historia Del negocio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Empleados">Empleados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Formulario">Formulario De Agendamiento</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Tienda">Tienda Oficial</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}