import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import monitor from '../../assets/MonitorPersona.jpg'
import monitorias from '../../assets/Libros.jpg'
export const AppRegistro = () => {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mt-5">
      <h1 className="text-center">Registro de datos</h1>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 className="card-title">Monitores</h5>
                <p className="card-text">Registrar nuevos monitores  </p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center">
                  <img className="img-thumbnail" src={monitor} alt="Monitor" style={{width:'30rem',height:'20rem'}} />
                </div>
                <a href="/registro/monitores" className="btn btn-primary">Registrar monitor</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 className="card-title">Monitorias</h5>
                <p className="card-text">Registrar las monitorias ya realizadas realizadas </p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center">
                  <img className="img-thumbnail" src={monitorias} alt="Monitoria" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/registro/monitorias" className="btn btn-primary">Registrar monitorias</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
