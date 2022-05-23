import React from "react";
import { NavBar } from "../NavBar/NavBar.jsx";

export const FormularioRegistro = () => {
    const [monitores, setMonitores] = React.useState([])
    const [datosForm, setDatosForm] = React.useState({
        id_monitor: 0,
        materia: '',
        fecha: '',
        salon: '',
    });

    React.useEffect(() => {
        loadMonitores()
    }, [])


    const loadMonitores = async () => {
        const response = await fetch(`http://localhost:4000/monitores`);
        const data = await response.json();
        setMonitores(data.body)
        monitores.map(item => console.log(item.nombre))

    };

    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    };

    const sendHanlder = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:4000/monitorias', {
            method: 'POST',
            body: JSON.stringify(datosForm),
            headers: { "Content-Type": 'application/json' }
        });

        setDatosForm({
            id_monitor: 0,
            materia: '',
            fecha: '',
            salon: '',
        })


    };
    return (
        <>
            <NavBar></NavBar>

            <div className="container mt-5">
                <h2 className="text-center">Registro de monitorias</h2>
                <hr />
                <div className="row">
                    <div>
                        <form onSubmit={sendHanlder}>

                            <select
                                name="id_monitor"
                                value={datosForm.id_monitor}
                                className="form-select form-select-sm mb-2 mt-3"
                                aria-label=".form-select-sm example"
                                onChange={handleChange}
                            >
                                <option value="0" disabled>
                                    Seleccione el monitor
                                </option>
                                {monitores.map((item) => (
                                    <option key={item.idMonitores} value={item.idMonitores}>{item.nombre} {item.apellidos}</option>
                                ))}
                            </select>
                            <input
                                name="materia"
                                className="form-control mb-2"
                                type="text"
                                placeholder="Ingrese Materia"
                                onChange={handleChange}
                                value={datosForm.materia}
                            />
                            <input
                                name="fecha"
                                className="form-control mb-2"
                                type="date"
                                onChange={handleChange}
                                value={datosForm.fecha}
                            />
                            <input
                                name="salon"
                                className="form-control mb-2"
                                type="text"
                                placeholder="Ingrese el salon"
                                onChange={handleChange}
                                value={datosForm.salon}
                            />
                            <button type='submit' onClick={sendHanlder} className="btn btn-primary col-12 mt-2" >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
