import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import monitor from '../../assets/Monitor.png'
import monitorias from '../../assets/Monitoria.jpg'
//import {Card} from '../../components/Cards/Card.jsx'
export const AppConsultas = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="container mt-5">
                <div className="row">
                    <h1 className="text-center">Consulta de datos</h1>
                    <hr />
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body row">
                                <h5 className="card-title">Monitores</h5>
                                <p className="card-text">Aqui podra consultar lo monitores registrados hasta el momento</p>
                                <div className="col-sm-15 mb-4 d-flex justify-content-center">
                                    <img style={{width:'30rem',height:'20rem'}} className="img-thumbnail" src={monitor} alt="Monitor" />
                                </div>
                                <a href="/consultas/monitores" className="btn btn-primary">Consultar monitores</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body row">
                                <h5 className="card-title">Monitorias</h5>
                                <p className="card-text">Aqui podra consultar las monitorias hasta el momento</p>
                                <div className="col-sm-15 mb-4 d-flex justify-content-center">
                                    <img style={{width:'30rem',height:'20rem'}} className="img-thumbnail" src={monitorias} alt="Monitoria" />
                                </div>
                                <a href="/consultas/monitorias" className="btn btn-primary">Consultar monitorias</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <Card tituloUno="Consultar monitores" tituloDos='Consultar monitorias' cuerpoUno='Aqui podra consultar los monitores registrados hasta el momento' cuerpoDos='Aqui podra consultar las monitorias asignadas hasta la fecha' botonUno='Consultar monitores' botonDos='Consultar monitorias' imgUno='Lupa.png' imgDos=''/> */}
        </>
    )
}
