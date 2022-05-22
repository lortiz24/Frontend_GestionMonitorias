import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Inicio} from '../views/Inicio/Inicio.jsx'
import { AppRegistro } from '../views/Registro/AppRegistro.jsx'
import { Monitorias } from '../views/Registro/Monitorias.jsx'
import { Monitores } from '../views/Registro/Monitores.jsx' 
import { AppConsultas } from '../views/Consultas/AppConsultas.jsx' 
import {MonitoriasC} from '../views/Consultas/MonitoriasC.jsx'
import {MonitoresC} from '../views/Consultas/MonitoresC.jsx'
export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Inicio />} ></Route>
            <Route path='/registro' element={<AppRegistro />} ></Route>
            <Route path='/consultas' element={<AppConsultas />} ></Route>
            <Route path='/consultas/monitorias' element={<MonitoriasC />} ></Route>
            <Route path='/consultas/monitores' element={<MonitoresC />} ></Route>
            <Route path='/registro/monitorias' element={<Monitorias />}></Route>
            <Route path='/registro/monitores' element={<Monitores />}></Route>
        </Routes>

    </div>
  )
}
