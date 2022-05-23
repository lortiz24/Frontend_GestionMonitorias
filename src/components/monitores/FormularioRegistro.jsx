import React from "react";
export const FormularioRegistro = () => {
    const [file, setFile] = React.useState(null);
    const [semestres, setSemestres] = React.useState([]);
    (() => {
        setSemestres([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])
    })();
    const [objeto, setObjeto] = React.useState({
        nombre: "",
        apellidos: "",
        programAcademica: "",
        semestre: 0,
        cedula: "",
        telefono: "",
        email: "",
    });

    const handleChange = (e) => {
        setObjeto({ ...objeto, [e.target.name]: e.target.value });
    };
    const selectedHanlder = (e) => {
        setFile(e.target.files[0]);
        console.log(file);
    };

    const sendHanlder = (e) => {
        e.preventDefault();
        if (!file) {
            alert("Debes subir un archivo");
        }

        const formdata = new FormData();

        formdata.append("image", file);
        fetch(`http://localhost:4000/monitores/${1}/images`, {
            method: "POST",
            body: formdata,
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => {
                console.log(err);
            });
        setFile(null);
        document.getElementById("fileinput").value = null;
    };
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Registro de monitores</h1>
                <hr />
                <div className="row">
                    <div className="col-5">
                        <form onSubmit={sendHanlder} className="form-control">
                            <input
                                name="nombre"
                                value={objeto.nombre}
                                className="form-control mb-2 mt-1"
                                type="text"
                                placeholder="Ingrese Nombre"
                                onChange={handleChange}
                            />
                            <input
                                name="apellidos"
                                value={objeto.apellidos}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese Apellido"
                                onChange={handleChange}
                            />
                            <input
                                name="programAcademica"
                                value={objeto.programAcademica}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese programa academico"
                                onChange={handleChange}
                            />
                            <select
                                name="programAcademica"
                                value={objeto.semestre}
                                className="form-select form-select-sm mb-2 mt-3"
                                aria-label=".form-select-sm example"
                                onChange={handleChange}
                            >
                                <option value="0" disabled>
                                    Seleccione el semestre
                                </option>
                                {semestres.map((item) => (
                                    <option value="item">Semestre {item}</option>
                                ))}
                            </select>
                            <input
                                name="cedula"
                                value={objeto.cedula}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese cedula"
                                onChange={handleChange}
                            />
                            <input
                                name="telefono"
                                value={objeto.telefono}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese telefono"
                                onChange={handleChange}
                            />
                            <input
                                name="email"
                                value={objeto.email}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese email"
                                onChange={handleChange}
                            />
                            <div className="card">
                                <label htmlFor="foto">Seleccion de foto</label>
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFileLang"
                                    onChange={selectedHanlder}
                                />


                            </div>

                            <button type='submit' onClick={sendHanlder} className="btn btn-primary col-12 mt-2" >
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="col-5">
                        {/* Aqui va una imagen */}
                    </div>
                </div>
            </div>
        </>
    );
};
