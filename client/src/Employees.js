import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import EmployeeCard from "./EmployeeCard"


function Employees() {
    const[employees, setEmployees] = useState([])

    
    function removeEmployee(employee){
        setEmployees((employees)=> employees.filter(t => t.id !== employee.id))
    }

    function addEmployee(employee){ 
        setEmployees([...employees, employee])
    }

    

    useEffect(()=> {
        fetch(`/employees`)
        .then((r) => r.json())
        .then(setEmployees)
    }, [])  



    return (
        
        <div>
            <h1>Employee list</h1>
            <Link to={`/about`}><h4>About</h4></Link>
            {employees.map(t => <EmployeeCard employee={t} key={t.id} />)}
            
            
            

        </div>
        

    )

}

export default Employees