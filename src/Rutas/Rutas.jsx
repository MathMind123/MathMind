import { Route, Routes } from "react-router-dom"
import { Menu } from "../Menu/Menu"
import { Home } from "../Home/Home"
import { Historia_Negocio } from "../Historia_Negocio/Historia_Negocio"
import { Empleados } from "../Empleados/Empleados"
import { Formulario } from "../Formulario/Formulario"
import { Tienda } from "../Tienda/Tienda"

export function Rutas(){
    return(
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Historia" element={<Historia_Negocio />} />
                <Route path="/Empleados" element={<Empleados />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/Tienda" element={<Tienda />} />
            </Routes>
        </>
    )
}