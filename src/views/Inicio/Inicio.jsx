import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
export const Inicio = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="container mt-5">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Registro de datos</h5>
                <p class="card-text">Aqui podra hacer registro de nuevos minitores asi como tambien asignar nuevas monitorias  </p>
                <a href="/registro" class="btn btn-primary">Registrar</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Consulta de datos</h5>
                <p class="card-text">Aqui podra hacer consultas de monitorias ya asignadas y de los monitores registrados hasta el momento</p>
                <a href="/consultas" class="btn btn-primary">Consultar</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
