import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Monitores} from './Monitores.jsx'
import {Monitorias} from './Monitorias.jsx'
export const AppRegistro = () => {
  return (
    <div>
        <Routes>
            <Route path='/monitores' element={<Monitores />} ></Route>
            <Route path='/monitorias' element={<Monitorias />} ></Route>
            
        </Routes>

    </div>
  )
}
