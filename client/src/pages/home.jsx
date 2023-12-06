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
    active: false
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
        <div class="grid grid-cols-2 gap-4 py-2">
          <input type="text" placeholder="Username" class="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="Email" class="border border-gray-400 py-1 px-2"/>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Password" class="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="Firstname" class="border border-gray-400 py-1 px-2"/>
        </div>
        <div class="grid grid-cols-2 gap-4 py-2">
          <input type="text" placeholder="Lastname" class="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="DateOfBirth" class="border border-gray-400 py-1 px-2"/>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Address" class="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="PhoneNumber" class="border border-gray-400 py-1 px-2"/>
        </div>
        <div class="grid grid-cols-2 gap-4 py-2">
          <input type="text" placeholder="Role" class="border border-gray-400 py-1 px-2"/>
          <input type="text" placeholder="Active" class="border border-gray-400 py-1 px-2"/>
        </div>
      </form>
    </div>
  )
}

export default Home