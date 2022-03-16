import { useState } from "react"


function EmployeeForm({user}){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")


    function handleSubmit (e){
        e.preventDefault()
        setName("")
        setAge(0)
        setStatus("")
        setGender("")

        fetch("/employees",{
            method: "POST",
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
        .then(t => addEmployee(t))
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Employee</h2>

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


        </div>

    )



}

export default EmployeeForm