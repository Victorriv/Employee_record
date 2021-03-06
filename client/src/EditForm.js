import {useState} from "react"

function EditForm({employee,user, editEmployee, handleEditButtonClick}){
    const [name, setName] = useState(employee.name)
    const [age, setAge] = useState(employee.age)
    const [status, setStatus] = useState(employee.status)
    const [gender, setGender] = useState(employee.gender)


    function handleSubmit(e){
        e.preventDefault()
        setName("")
        setAge(0)
        setStatus("")
        setGender("")


        fetch(`/employees/${employee.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                age,
                status,
                gender,
                user_id: user.id
            }),
        })
          .then(r => r.json())
          .then(t => {
              editEmployee(t)
              handleEditButtonClick()
            })
    }
    


    return(
            <form onSubmit={handleSubmit}>
                <h2>Edit</h2>

                <label> Name: </label>
                <input type= "text" id="name" value={name} onChange={e => setName(e.target.value)} />

                <label> Age: </label>
                <input type= "text" id="age" value={age} onChange={e => setAge(e.target.value)}/>

                <label>Status: </label>
                <input type= "text" id="status" value={status} onChange={e => setStatus(e.target.value)}/>

                <label>Gender</label>
                <input type="text" id="gender" value={gender} onChange={e => setGender(e.target.value)}/>
                <input type= "submit" />
                
                
            </form>


    )




}

export default EditForm