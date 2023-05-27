export function Tienda() {
    let serviciosDocente = [
        {
            nombre: "Lapicero matemático",
            precio: 500000,
            foto: "https://firebasestorage.googleapis.com/v0/b/imagenes-961dc.appspot.com/o/lapiz.jpg?alt=media&token=df6f79bc-1659-4e42-90ed-528661de649d",
            descripcion: "Escribe lo que sea"
        },
        {
            nombre: "Anillo matematico",
            precio: 100000000,
            foto: "../../src/assets/Image/anillo.png",
            descripcion: "Lo sabras todo"
        },
        {
            nombre: "Manilla matemática",
            precio: 1400,
            foto: "../../src/assets/Image/manilla.jpg",
            descripcion: "Andaras más seguro"
        },
        {
            nombre: "pantalon matematico",
            precio: 40000,
            foto: "../../src/assets/Image/pantalon.jpg",
            descripcion: "Nunca se te caeran los números de tu billetera"
        },
        {
            nombre: "camisa matematico",
            precio: 9045,
            foto: "../../src/assets/Image/camisa.webp",
            descripcion: "Camisa con numeros"
        },
        {
            nombre: "zapatillas matematicas",
            precio: 10495,
            foto: "../../src/assets/Image/zapatillas.jpg",
            descripcion: "Caminaras mas rapido"
        },
        {
            nombre: "Tutor",
            precio: 40000,
            foto: "https://firebasestorage.googleapis.com/v0/b/imagenes-961dc.appspot.com/o/tutor.jpg?alt=media&token=1e5dd8a9-cf2f-4522-be6c-9316e8a5530f",
            descripcion: "Te instruira de por vida "
        },
        {
            nombre: "Profesor individual",
            precio: 140000,
            foto: "https://firebasestorage.googleapis.com/v0/b/imagenes-961dc.appspot.com/o/profe.jpg?alt=media&token=d6887144-38d4-4619-9233-fcccc235cddc",
            descripcion: "Solo compralo"
        },
        {
            nombre: "Bus matemático",
            precio: 10,
            foto: "https://firebasestorage.googleapis.com/v0/b/imagenes-961dc.appspot.com/o/bus.jpg?alt=media&token=8098e9f8-99cb-4fbb-8501-40e0dc611bf8",
            descripcion: "te llevara con la razon"
        },
        {
            nombre: "Lápiz profesional matemática",
            precio: 1000000,
            foto: "https://firebasestorage.googleapis.com/v0/b/imagenes-961dc.appspot.com/o/lapiz.jpg?alt=media&token=df6f79bc-1659-4e42-90ed-528661de649d",
            descripcion: "Este lápiz soluciona cualquier ejercicio"
        },
    ]
    return (
        <>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="container mt-5">
                <div className="row">
                    {
                        serviciosDocente.map(function (servicio) {
                            return (
                                <div className="col">
                                    <div className="card h-70 shadow text-center shadow ">
                                        <h1>{servicio.nombre}</h1>
                                        <img src={servicio.foto}
                                            alt="juan"
                                            className="img-fluid w-100" />
                                        <p>{servicio.descripcion}</p>
                                        <h3> <button>${servicio.precio}</button></h3>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}