import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Inicio} from '../views/Inicio/Inicio.jsx'
import { AppRegistro } from '../views/Registro/AppRegistro.jsx'
import { Monitorias } from '../views/Registro/Monitorias.jsx'
import { Monitores } from '../views/Registro/Monitores.jsx' 
import { Consultas } from '../views/Consultas/Consultas.jsx' 
export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Inicio />} ></Route>
            <Route path='/registro' element={<AppRegistro />} ></Route>
            <Route path='/consultas' element={<Consultas />} ></Route>
            <Route path='/registro/monitorias' element={<Monitorias />}></Route>
            <Route path='/registro/monitores' element={<Monitores />}></Route>
        </Routes>

    </div>
  )
}
