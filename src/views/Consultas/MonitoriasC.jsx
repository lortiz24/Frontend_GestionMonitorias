import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar';

export const MonitoriasC = () => {
  const [monitoriasList, setMonitoriasList] = React.useState([]);
  
  const loadMonitorias = async () => {
    const response = await fetch(`http://localhost:4000/monitorias/`);
    const data = await response.json();
    setMonitoriasList(data.body)
    console.log(data.body);
  };

  
  React.useEffect(() => {
    loadMonitorias()
  }, [])
  return (
    <>
      <NavBar />
      <div className='container mt-5'>
        <h1 className='text-center'>Lista de monitorias</h1>
        <hr />
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body row">
              <ul className="list-group list-group-flush">
                {
                  (monitoriasList.length === 0 ? "" : (monitoriasList.map(item => (
                    <li key={item.idMonitorias} className="list-group-item" >
                      <div className="row">
                        <div className="col-6">
                          <p className="lead">Materia: </p>
                          {item.materia}
                          <p className="lead">Fecha:</p>
                          {item.fecha}
                          <p className="lead">Salon:</p>
                          {item.salon}
                        </div>
                      </div>


                    </li>
                  ))))
                }
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
