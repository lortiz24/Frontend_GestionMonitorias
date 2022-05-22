/* import React from 'react'
//const image =require.context('../../assets/',true) 



export const Card = ({tituloUno,tituloDos,cuerpoUno,cuerpoDos,botonUno,botonDos, imgUno, imgDos}) => {
    return (
        <>
            <div className="container mt-5">
                <div class="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body row">
                                <h5 class="card-title">{tituloUno}</h5>
                                <p className="card-text">{cuerpoUno}</p>
                                <div className="col-sm-15 mb-4">
                                    <img className="img-thumbnail" src={image(`Lupa.png`)} alt="Monitor" />
                                </div>
                                <a href="/registro/monitores" className="btn btn-primary">{botonUno}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body row">
                                <h5 class="card-title">{tituloDos}</h5>
                                <p class="card-text">{cuerpoDos}</p>
                                <div className="col-sm-15 mb-4">
                                   {  <img className="img-thumbnail" src={image(`/${imgDos}`)} alt="Monitoria" /> }
                                </div>
                                <a href="/registro/monitorias" class="btn btn-primary">{botonDos}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 */