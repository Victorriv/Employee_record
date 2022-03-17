import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom';
import EmployeeCard from "./EmployeeCard"
import EmployeeForm from "./EmployeeForm";


function Employees() {
    const[employees, setEmployees] = useState([])

    
    function removeEmployee(employee){
        setEmployees((employees)=> employees.filter(t => t.id !== employee.id))
    }

    function addEmployee(employee){ 
        setEmployees([...employees, employee])
    }

    function editEmployee(employee){
        const edited = employees.map(t =>{
            if (employee.id === t.id) {
                return employee
            }
            return t
        })
        setEmployees(edited)
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
            {employees.map(t => <EmployeeCard user={t} editEmployee={editEmployee} key={t.id} removeEmployee={removeEmployee} />)}
            <EmployeeForm user={user} addEmployee={addEmployee}/>
            
            
            

        </div>
        

    )

}

export default Employees