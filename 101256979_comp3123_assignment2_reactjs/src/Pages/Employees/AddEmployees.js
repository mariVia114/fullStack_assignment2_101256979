import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddEmployees() {
    const [first_name, setFName] = useState("");
    const [last_name, setLName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");


    const nav = useNavigate();
    const empData = {
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        email: email,
        salary: salary
    }

    function onClick(e){
        e.preventDefault();
        axios.post("http://comp3123-api.herokuapp.com/api/emp/employees", empData).then(nav('/'));
    }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">

      <h2 className="text-2xl font-bold">ADD USER</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={first_name}
          onChange={(e) => setFName(e.target.value)}
          className="bg-white/10 outline-none color-black font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your first name.."
        />
        <input
          value={last_name}
          onChange={(e) => setLName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your last name.."
        />
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter gender.."
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="number"
          placeholder="Enter your salary.."
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={onClick}
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployees