import React from "react";
import { NavBar } from "../NavBar/NavBar.jsx";

export const FormularioRegistro = () => {
    const [monitores, setMonitores] = React.useState([])
    const [datos, setDatos] = React.useState({
        idMonitorias: null,
        id_monitor: null,
        materia: "",
        fecha: "",
        salon: "",
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


    return (
        <>
            <NavBar></NavBar>

            <div className="container mt-5">
                <h2 className="text-center">Registro de monitorias</h2>
                <hr />
                <div className="row">
                    <div>
                        <form action="">

                            <select
                                name="Nombremonitor"
                                /* value={datosForm.semestre} */
                                className="form-select form-select-sm mb-2 mt-3"
                                aria-label=".form-select-sm example"
                            /* onChange={handleChange} */
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
                                onChange={(e) =>
                                    setDatos({ ...datos, [e.target.name]: e.target.value })
                                }
                                value={datos.materia}
                            />

                            <input
                                name="salon"
                                className="form-control mb-2"
                                type="text"
                                placeholder="Ingrese el salon"
                                onChange={(e) =>
                                    setDatos({ ...datos, [e.target.name]: e.target.value })
                                }
                                value={datos.materia}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
