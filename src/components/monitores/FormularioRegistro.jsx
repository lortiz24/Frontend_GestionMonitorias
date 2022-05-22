import React from 'react'
import { NavBar } from '../NavBar/NavBar';
export const FormularioRegistro = () => {
    const [datos, setDatos] = React.useState({});

    return (
        <>
            <div className='container mt-5'>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFileLang" lang="es" />
                    <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
                </div>
            </div>
        </>
    )
}
