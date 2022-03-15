import './App.css';
import EmployeeCard from './EmployeeCard';
//import {useState, useEffect} from "react";
import Employees from './Employees';

function App() {




  return (
    <div className="App">
      <header className="App-header">
       
        <Employees/>
        <EmployeeCard/> 
        
      </header>
    </div>
  );
}

export default App;
