import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar';
import generateMonitoria from '../../configs/email'
export const MonitoriasC = () => {
  const [monitoriasList, setMonitoriasList] = React.useState([]);
  const [monitores, setMonitores] = React.useState([])
  const [constrol, setConstrol] = React.useState(false);
  const loadMonitorias = async () => {
    const response = await fetch(`http://localhost:4000/monitorias/`);
    const data = await response.json();
    setMonitoriasList(data.body)
    console.log(data.body);
  };

  const eliminarMonitoria = async (idMonitores) => {
    console.log(idMonitores);
    await fetch(`http://localhost:4000/monitorias/${idMonitores}`, {
      method: 'DELETE'
    });
    setConstrol(true);
  };
  React.useEffect(() => {
    loadMonitorias();
    loadMonitores();
    console.log('object');
    setConstrol(false);
  }, [constrol])

  const loadMonitores = async () => {
    const response = await fetch(`http://localhost:4000/monitores`);
    const data = await response.json();
    console.log(data.body);
    setMonitores(data.body)
  }
  const notificarMonitorias = async (emailMonitor, materia, fecha) => {

    let body = generateMonitoria(emailMonitor, materia, fecha);
    const response = await fetch('http://localhost:4000/email', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { "Content-Type": 'application/json' }
    });
    const res = await response.json();
    
    if (res.message === 'Ok') {
      alert('Se envio el correo correctamente')
    }
    
  }
  const devolverMonitor = (id) => {

    if (monitores.length !== 0) {
      return monitores.find(item => item.idMonitores === id)
    }
    return []
  }
  return (
    <>
      <NavBar />
      <div className='container mt-5'>
        <h1 className='text-center'>Lista de monitorias</h1>
        <hr />
        <div className="">
          <div className="row ">
            {
              (monitoriasList.length === 0 ? "" : (monitoriasList.map(item => (
                <div className="card mt-2 col-sm-6 ">
                  <div className="card-body">
                    <div className="card">
                      <h4>Monitor: {monitores.length === 0 ? '' : `${devolverMonitor(item.id_monitor).nombre} ${devolverMonitor(item.id_monitor).apellidos}`} </h4>
                    </div>
                    <div className="card">
                      <h4>Materia: {item.materia}</h4>
                    </div>
                    <div className="card">
                      <h4>Fecha: {item.fecha}</h4>
                    </div>
                    <div className="card">
                      <h4>Salon: {item.salon}</h4>
                    </div>



                    <div className="col-sm-15 mb-4">

                    </div>

                    <div className="d-flex justify-content-between">
                      <button onClick={() => { eliminarMonitoria(item.idMonitorias) }} className="btn btn-warning">Editar</button>
                      <button onClick={() => { eliminarMonitoria(item.idMonitorias) }} className="btn btn-danger">Eliminar</button>
                      <button onClick={() => { notificarMonitorias(devolverMonitor(item.id_monitor).email, item.materia, item.fecha, item) }} className="btn btn-primary">Notificar al monitor</button>
                    </div>
                  </div>
                </div>

              ))))
            }
          </div>
        </div>
      </div>
    </>
  )
}
