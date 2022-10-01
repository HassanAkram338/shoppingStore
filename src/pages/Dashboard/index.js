import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Dashboard from "./Dashboard"

export default function index() {
  return (
    <Routes>
        <Route path='/'>
            <Route index element={<Dashboard/>}/>
        </Route>
    </Routes>
  )
}
