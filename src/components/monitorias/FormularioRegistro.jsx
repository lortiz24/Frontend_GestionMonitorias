import React from "react";
import { NavBar } from "../NavBar/NavBar.jsx";

export const FormularioRegistro = () => {


    const [datos, setDatos] = React.useState({
        idMonitorias: null,
        id_monitor: null,
        materia: "",
        fecha: "",
        salon: "",
    });

    return (
        <>
            <NavBar></NavBar>

            <div className="container mt-5">
                <h2 className="text-center">Registro de monitorias</h2>
                <hr />
                <div className="row">
                    <div>
                        <form action="">
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
