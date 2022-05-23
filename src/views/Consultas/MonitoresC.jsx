import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";

export const MonitoresC = () => {
  const [monitoresList, setMonitoresList] = React.useState([]);
  const [constrol, setConstrol] = React.useState(false);
  const loadMonitores = async () => {
    const response = await fetch(`http://localhost:4000/monitores/`);
    const data = await response.json();
    setMonitoresList(data.body);
    console.log(data.body);
  };
  React.useEffect(() => {
    loadMonitores();
    setConstrol(false)
  }, [constrol]);
  const eliminarMonitor = async (idMonitores, fotoname) => {
    console.log(idMonitores);
    const response = await fetch(`http://localhost:4000/monitores/${fotoname}/${idMonitores}`, {
      method: 'DELETE',

    });
    const res = await response.json();
    if (res.message === 'notdeleted') alert('No pudo eliminar');
    if (res.message === 'foreingkey') alert('No se puede eliminar ya que hay monitorias asignadas')
    setConstrol(true)

  };
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1 className="text-center">Lista de monitores</h1>
        <hr />

        <div className="row ">
          {monitoresList.length === 0
            ? ""
            : monitoresList.map((item) => (
              <div className="card mt-2 col-sm-6 ">
                <div className="card-body">
                  <div className="card">
                    <h4>Nombre: {item.nombre}</h4>
                  </div>
                  <div className="card">
                    <h4>Appelidos: {item.apellidos}</h4>
                  </div>
                  <div className="card">
                    <h4>Programa academico: {item.programAcademica}</h4>
                  </div>
                  <div className="card">
                    <h4>Semestre: {item.semestre}</h4>
                  </div>
                  <div className="card">
                    <h4>Cedula: {item.cedula}</h4>
                  </div>
                  <div className="card">
                    <h4>Telefono: {item.telefono}</h4>
                  </div>
                  <div className="card">
                    <h4>Email: {item.email}</h4>
                  </div>

                  <div className="col-sm-15 mb-4 d-flex justify-content-center">
                    <img style={{ width: '30rem', height: '20rem' }} className="img-thumbnail" src={'http://localhost:4000/'+item.foto_name} alt="Monitor" />
                  </div>
                  <button className="btn btn-warning">Editar</button>
                  <button
                    onClick={() => eliminarMonitor(item.idMonitores, item.foto_name)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
