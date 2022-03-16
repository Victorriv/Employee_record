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
            <h4>Login to your account: </h4>
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

            <h4> Need to create an account? </h4>
            <SignUpForm setUser={setUser}/>

        </div>
    )

}

export default LoginForm
