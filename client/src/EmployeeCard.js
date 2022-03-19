import React, {useState} from 'react'
import EditForm from './EditForm'

function EmployeeCard({employee, removeEmployee, user, editEmployee}){
    const [editForm, setEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show Edit Form")

    
    function handleDelete(employee){
        fetch(`/employees/${employee.id}`, {method: "DELETE"}).then(r => {
            removeEmployee(employee)
            
          })
    }

    function handleEditButtonClick(){
        setEditForm(!editForm)
        !editForm ? setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
    }



    return(
        <div>
            {/* <h1>Employee Card</h1> */}
            <p>Name: {employee.name}</p>
            <p> Age: {employee.age}</p>
            <p> Status: {employee.status}</p>
            <p> Gender: {employee.gender}</p>
            <br></br>
            <button onClick={e => handleDelete(employee)} > Remove </button>
            <button onClick={e => handleEditButtonClick()}>{editButton}</button>

            {editForm ? <EditForm handleEditButtonClick={handleEditButtonClick} editEmployee={editEmployee} employee={employee} user={user}/> : null}
        </div>


    )

}

export default EmployeeCard