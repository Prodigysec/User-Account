import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import DeleteUser from './pages/DeleteUser'
import Home from './pages/home'
import ShowUser from './pages/showUser'
import UpdateUser from './pages/updateUser'
import LoginUser from './pages/loginUser'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<LoginUser/>} />
      <Route path="/users/create" element={<CreateUser/>} />
      <Route path="/users/details/:id" element={<ShowUser/>} />
      <Route path="/users/edit/:id" element={<UpdateUser/>} />
      <Route path="/users/delete/:id" element={<DeleteUser/>} />
    </Routes>
 )
}

export default App
