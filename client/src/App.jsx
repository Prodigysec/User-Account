import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import DeleteUser from './pages/DeleteUser'
import Home from './pages/home'
import ShowUser from './pages/showUser'
import UpdateUser from './pages/updateUser'

function App() {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/users/create" element={<CreateUser/>} />
      <Route path="/users/details/:id" element={<ShowUser/>} />
      <Route path="/users/edit/:id" element={<UpdateUser/>} />
      <Route path="/users/delete/:id" element={<DeleteUser/>} />
    </Routes>
  )
}

export default App
