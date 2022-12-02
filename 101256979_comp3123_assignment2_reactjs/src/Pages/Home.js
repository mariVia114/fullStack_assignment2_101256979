import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


function Home() {
  const nav = useNavigate();

  const [employees, setEmployees] = useState([]);
const loadEmp = () => {  
    axios.get("http://comp3123-api.herokuapp.com/api/emp/employees")
    .then((res) => {
      setEmployees(res.data);
      console.log(employees)
    });
  };
  useEffect(() =>{
    loadEmp()
  });

  function deleteEmp(id){
    axios.delete(`http://comp3123-api.herokuapp.com/api/emp/employees?eid=${id}`).then(loadEmp(),nav("/employee"))
  }

  return (
    <>
    <NavBar/>

    <div className='w-full h-full flex flex-content px-10 py-8'>
      <div className='w-full flex flex-col min-h-[50vh] justify-center items-center'>
        <h1 className='text-black text-3xl font-semibold'>Home Page</h1>
        <table className="w-[80%] text-center overflow-hidden overflow-y-scroll">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                First Name
              </th>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                Last Name
              </th>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                Gender
              </th>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                Salary
              </th>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-black font-bold px-6 py-4 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {employees.map((emp , index=0) =>(

            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {emp.first_name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {emp.last_name}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {emp.gender}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ${emp.salary}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {emp.email}
              </td>
              <td className="flex justify-center items-center space-x-4 mt-1">
                <Link to={`/employee/${emp['_id']}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg'>View</Link>
                <Link to={`/employee/update/${emp['_id']}`} className='px-6 py-2 text-white bg-blue-600 rounded-lg'>Edit</Link>
                <Link onClick={()=>deleteEmp(emp['_id'])} to={"#"} className='px-6 py-2 text-white bg-red-600 rounded-lg'>Delete</Link>

              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Home