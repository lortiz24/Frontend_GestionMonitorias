import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import Registro from '../../assets/Registro.jpg'
import Lupa from '../../assets/Lupa.jpg'
export const Inicio = () => {
  return (
    <>
      <NavBar></NavBar>
      
      <div className="container mt-5">
        <h1 className="text-center">Sistema de gestion de monitorias</h1>
        <hr />
        <div className="row">
          <div className="col-sm-6" >
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Registro de datos</h5>
                <p className="card-text">Aqui podra hacer registro de nuevos minitores asi como tambien asignar nuevas monitorias  </p>
                <div className="col-sm-15 mb-4">
                  <img className="img-thumbnail" src={Registro} alt="Teclado" />
                </div>
                <a href="/registro" className="btn btn-primary">Registrar</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consulta de datos</h5>
                <p className="card-text">Aqui podra hacer consultas de monitorias ya asignadas y de los monitores registrados hasta el momento</p>
                <div className="col-sm-15 mb-4" >
                  <img className="img-thumbnail" src={Lupa} alt="Teclado" />
                </div>
                <a href="/consultas" className="btn btn-primary">Consultar</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
