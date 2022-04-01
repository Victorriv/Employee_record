import { useState } from "react"


function EmployeeForm({user, addEmployee}){
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [errors, setErrors] = useState("")


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
        }).then((res) => {
            if(res.ok){
                res.json().then((emp) => {
                    addEmployee(emp)
                
                })

            } else {
                res.json().then(errors => {
                    setErrors(errors.errors)
                })
            }
        })
    }

    const displayError = () => {
        return errors.map(error => {
            return <div>{error}</div>
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                {errors ? 
                <span>{errors && displayError()}</span> : <span></span>
                }
            
                <h2>Add Employee</h2>

                <label className="L"> Name: </label>
                <input type= "text" id="name" value={name} onChange={e => setName(e.target.value)} />
                <br/>

                <label className="L"> Age: </label>
                <input type= "text" id="age" value={age} onChange={e => setAge(e.target.value)}/>
                <br/>

                <label className="L">Status: </label>
                <input type= "text" id="status" value={status} onChange={e => setStatus(e.target.value)}/>
                <br/>

                <label className="L" >Gender:</label>
                <input type="text" id="gender" value={gender} onChange={e => setGender(e.target.value)}/>
                <br/>
                <input type= "submit" />
                
                
                
            </form>


                </div>

    )



}

export default EmployeeForm