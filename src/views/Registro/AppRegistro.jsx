import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import monitor from '../../assets/Monitor.png'
import monitorias from '../../assets/Monitoria.jpg'
export const AppRegistro = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container mt-5">
        <div class="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 class="card-title">Monitores</h5>
                <p className="card-text">Registrar nuevos monitores  </p>
                <div className="col-sm-15 mb-4">
                  <img className="img-thumbnail" src={monitor} alt="Monitor" />
                </div>
                <a href="/registro/monitores" className="btn btn-primary">Registrar monitor</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body row">
                <h5 class="card-title">Monitorias</h5>
                <p class="card-text">Registrar las monitorias ya realizadas realizadas </p>
                <div className="col-sm-15 mb-4">
                  <img className="img-thumbnail" src={monitorias} alt="Monitoria" />
                </div>
                <a href="/registro/monitorias" class="btn btn-primary">Consultar monitorias</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
