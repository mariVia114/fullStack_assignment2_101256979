import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewEmployee() {
  const [employees, setEmployees] = useState([]);
  const { eId } = useParams();

  useEffect(() => {
    axios
      .get(`http://comp3123-api.herokuapp.com/api/emp/employees/${eId}`)
      .then((res) => {
        setEmployees(res.data);
      }, []);
  });

  return (
    <>

      <div class="flex justify-center">
        <div class="block border-black rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div class="py-3 px-6 border-b border-gray-300">First Name: {employees.first_name} </div>
          <div class="py-3 px-6 border-b border-gray-300">Last Name: {employees.last_name}</div>
          <div class="py-3 px-6 border-b border-gray-300">Gender: {employees.gender}</div>
          <div class="py-3 px-6 border-t border-gray-300">Email: {employees.email}</div>
          <div class="py-3 px-6 border-t border-gray-300">Salary: ${employees.salary}</div>

        </div>
      </div>
    </>
  );
}

export default ViewEmployee;
