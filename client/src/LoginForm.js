import React, {useState} from "react"
import SignUpForm from "./SignUpForm"

function LoginForm({setUser}){
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState("")
    const [password, setPassword] = useState("")



    function handleSubmit(e){
        e.preventDefault() // stops submit request
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
              } else {
                r.json().then((err) => setErrors(err.errors)) 
              }
          });
        }

    return(

        <div className= "App">
            <h2> Account Login: </h2>
            <form onSubmit = {handleSubmit}>
                <label> Username: </label>
                    <input 
                        type= "text" 
                        id = "username"
                        value = {username}
                        onChange= {e => setUsername(e.target.value)}
                     />

                    <label> Password: </label>
                     <input  
                      type = "password"
                      id = "password"
                      autoComplete ="current-password"
                      value = {password}
                      onChange = {(e) => setPassword(e.target.value)}
                     />
                    <button type= "Submit"> Login</button>
                    <br/><br/>{errors}
            </form>

            <h3> Create Account: </h3>
            <SignUpForm setUser={setUser}/>

        </div>
    )

}

export default LoginForm
