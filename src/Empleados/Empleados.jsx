import './Empleados.css'

export function Empleados() {
    // Definir el objeto Profesor
    function Profesor(nombre, especialidad, experiencia, foto) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.experiencia = experiencia;
        this.foto = foto;
    }

    // Crear instancias de profesores
    var profesor1 = new Profesor("Juan Pérez", "Álgebra", 3, "../../src/assets/Image/docente 1.jpg");
    var profesor2 = new Profesor("María López", "Geometría", 3, "../../src/assets/Image/docente 3.png");
    var profesor3 = new Profesor("Carlos Ramírez", "Cálculo", 12, "../../src/assets/Image/docente 2.jpg");
    var profesor4 = new Profesor("Pablo Toro", "Cálculo", 5, "../../src/assets/Image/docente 4.jpg");
    var profesor5 = new Profesor("Carlos Andres", "Geometría", 8, "../../src/assets/Image/docente 5.jpg");

    // Crear el arreglo de profesores
    var profesores = [profesor1, profesor2, profesor3, profesor4, profesor5];

    return (
        <>
            <div className="row">
                {profesores.map((profesor, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={profesor.foto} alt={profesor.nombre} />
                            <h3>{profesor.nombre}</h3>
                            <p>Especialidad: {profesor.especialidad}</p>
                            <p>Experiencia: {profesor.experiencia} años</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}