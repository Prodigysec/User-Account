import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  // handle form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    phoneNumber: '',
    role: '',
    active: ''
  });

  // handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

 


  return (
    <div>
      <h2>Create your account</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 py-2">
          <input type="text" placeholder="Username" className="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2"/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Password" className="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 px-2"/>
        </div>
        <div className="grid grid-cols-2 gap-4 py-2">
          <input type="text" placeholder="Lastname" className="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="DateOfBirth" className="border border-gray-400 py-1 px-2"/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Address" className="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="PhoneNumber" className="border border-gray-400 py-1 px-2"/>
        </div>
        <div className="grid grid-cols-2 gap-4 py-2">
          <input type="text" placeholder="Role" className="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="Active" className="border border-gray-400 py-1 px-2"/>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Home