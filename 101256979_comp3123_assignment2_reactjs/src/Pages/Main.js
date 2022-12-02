import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
        <h1>Welcome!</h1>
        <div className='w-full h-16 flex items-center bg-blue-600 px-10 py-2 justify-between'>
        <Link to="/login" className='"hover:bg-teal-600
            hover:border-2 hover:border-white hover:blue hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"'>Login</Link>
    </div>
    </div>
  )
}

export default Main