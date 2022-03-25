import React, {useEffect, useState} from "react"
import EmployeeCard from "./EmployeeCard"
import EmployeeForm from "./EmployeeForm";


function Employees({user}) {
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
        fetch(`/users/${user.id}`)
        .then((r) => r.json())
        .then((d) => {
            setEmployees(d.employees)
        })
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps




    return (
        
        <div>
            <h1>Employee list</h1>
            {employees && employees.map(t => <EmployeeCard user={user} editEmployee={editEmployee} key={t.id} employee={t} removeEmployee={removeEmployee} />)}
            <EmployeeForm user={user} addEmployee={addEmployee}/>
            
            
            

        </div>
        

    )

}

export default Employees