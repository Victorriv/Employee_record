import './App.css';
import EmployeeCard from './EmployeeCard';
//import {useState, useEffect} from "react";
import Employees from './Employees';
import EmployeeForm from './EmployeeForm'

function App() {




  return (
    <div className="App">
      <header className="App-header">
       
        <Employees/>
        <EmployeeForm/>
        
      </header>
    </div>
  );
}

export default App;
