import React from 'react'
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <div className='w-full h-16 flex items-center bg-blue-600 px-10 py-2'>
        <Link to="/"><h1 className='text-white text-3xl font-semibold justify-right'>Employee Management App</h1></Link>
        <Link to="/employee/add" className='"hover:bg-teal-600
            hover:border-2 hover:border-white hover:blue hover:shadow-md rounded-lg bg-white font-bold text-black justify-right" px-2 py-2'>Add Employee</Link>
        <Link to="/login" className='"hover:bg-teal-600 hover:border-2 hover:border-white hover:blue hover:shadow-md rounded-lg bg-white font-bold text-black justify-left" px-2 py-2'>Logout</Link>
            
    </div>
  )
}

export default NavBar