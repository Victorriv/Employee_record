import React, {useState} from 'react'
import EditForm from './EditForm'

function EmployeeCard({employee, removeEmployee}){
    const [editForm, setEditForm] = useState(false)

    
    function handleDelete(employee){
        fetch(`/employees/${employee.id}`, {method: "DELETE"}).then(r => {
            removeEmployee(employee)
            
          })
    }



    return(
        <div>
            {/* <h1>Employee Card</h1> */}
            <p>Name: {employee.name}</p>
            <p> Age: {employee.age}</p>
            <p> Status: {employee.status}</p>
            <p> Gender: {employee.gender}</p>



            <button onClick={e => handleDelete(employee)} > Remove </button>

            <EditForm employee={employee}/>
        </div>


    )

}

export default EmployeeCard