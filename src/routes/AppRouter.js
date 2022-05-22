import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Inicio} from '../views/Inicio/Inicio.jsx'
import { AppRegistro } from '../views/Registro/AppRegistro.jsx'
export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Inicio />} ></Route>
            <Route path='/registro' element={<AppRegistro />} ></Route>
            <Route path='/asignacion' ></Route>
        </Routes>

    </div>
  )
}
