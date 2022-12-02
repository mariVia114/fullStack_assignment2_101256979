import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ViewEmployee from './Pages/Employees/ViewEmployee';
import EditEmployees from './Pages/Employees/EditEmployees';
import AddEmployees from './Pages/Employees/AddEmployees';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  return (
    
    <div className="App">
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/employee" element={<Home/>}/>
      <Route path="/employee/:eId" element={<ViewEmployee/>}/>
      <Route path="/employee/add" element={<AddEmployees/>}/>
      <Route path="/employee/update/:eId" element={<EditEmployees/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
