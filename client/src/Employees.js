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

    const organizeOrder = () =>{
        fetch('/employee/organize')
        .then((res) => res.json())
        .then((o) => setEmployees(o));
    };

    const nameSorted = () =>{
        fetch('/employee/list')
        .then((r) => r.json())
        .then((l) => setEmployees(l));

    };


    const showEmployees = employees&&employees.map((employee) => <EmployeeCard user={user} editEmployee={editEmployee} key={employee.id} employee={employee} removeEmployee={removeEmployee} />)
    return (
        
        <div>
            <h1>Employee list</h1>
        
            <button onClick= {organizeOrder}> Sort by age</button>
            <button onClick= {nameSorted}> Sort by name</button>
           
        
            {showEmployees}
            <EmployeeForm user={user} addEmployee={addEmployee}/>
            
            
            
            
            
            

        </div>
        

    )

}

export default Employees