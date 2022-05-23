import React from "react";
export const FormularioRegistro = () => {
    const [file, setFile] = React.useState(null);
    const [semestres, setSemestres] = React.useState([]);
    const [datosForm, setDatosForm] = React.useState({
        nombre: "",
        apellidos: "",
        programAcademica: "",
        semestre: 0,
        cedula: "",
        telefono: "",
        email: "",
    });
    const startSelect=() => {
        setSemestres([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ])
    }
    

    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
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
        const expRegular = /(\s{2,})/g;
        const body={
            nombre:datosForm.nombre.trim().replace(expRegular,' ').split(' ').join('$$'),
            apellidos:datosForm.apellidos.trim().replace(expRegular,' ').split(' ').join('$$'),
            programAcademica:datosForm.programAcademica.trim().replace(expRegular,' ').split(' ').join('$$'),
            semestre:datosForm.semestre.trim().replace(expRegular,' ').split(' ').join('$$'),
            cedula:datosForm.cedula.trim().replace(expRegular,''),
            telefono:datosForm.telefono.trim().replace(expRegular,''),
            email:datosForm.email.trim().replace(expRegular,''),
        }
        
        
        
        
        const formdata = new FormData();

        formdata.append("image", file);
        fetch(`http://localhost:4000/monitores/${body.nombre}/${body.apellidos}/${body.programAcademica}/${body.semestre}/${body.cedula}/${body.telefono}/${body.email}`, {
            method: "POST",
            body: formdata,
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
            .catch((err) => {
                console.log(err);
            });  
        setDatosForm({
            nombre: "",
            apellidos: "",
            programAcademica: "",
            semestre: 0,
            cedula: "",
            telefono: "",
            email: "",
        })
        setFile(null);
        document.getElementById("customFileLang").value = null;
    };

    React.useEffect(()=>{
        startSelect()
    },[])
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
                                value={datosForm.nombre}
                                className="form-control mb-2 mt-1"
                                type="text"
                                placeholder="Ingrese Nombre"
                                onChange={handleChange}
                            />
                            <input
                                name="apellidos"
                                value={datosForm.apellidos}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese Apellido"
                                onChange={handleChange}
                            />
                            <input
                                name="programAcademica"
                                value={datosForm.programAcademica}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese programa academico"
                                onChange={handleChange}
                            />
                            <select
                                name="semestre"
                                value={datosForm.semestre}
                                className="form-select form-select-sm mb-2 mt-3"
                                aria-label=".form-select-sm example"
                                onChange={handleChange}
                            >
                                <option value="0" disabled>
                                    Seleccione el semestre
                                </option>
                                {semestres.map((item) => (
                                    <option value={item}>Semestre {item}</option>
                                ))}
                            </select>
                            <input
                                name="cedula"
                                value={datosForm.cedula}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese cedula"
                                onChange={handleChange}
                            />
                            <input
                                name="telefono"
                                value={datosForm.telefono}
                                className="form-control mb-2 mt-3"
                                type="text"
                                placeholder="Ingrese telefono"
                                onChange={handleChange}
                            />
                            <input
                                name="email"
                                value={datosForm.email}
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
