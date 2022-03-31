import React, {useState} from "react"


function SignUpForm({setUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    function handleSubmit(e){
        e.preventDefault() 
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username,
                password,
            }),
        }).then(r => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
              } else {
                r.json().then((err) => setErrors(err.errors)) 
              }
          });
    }


    return (

        <div className= "App">
            <form onSubmit = {handleSubmit}>
                <label>  Create an Account: </label>
                <input type= "text" 
                        id = "username"
                        value = {username}
                        onChange= {e => setUsername(e.target.value) } />

                        <br/>
                        <label> Password: </label>
                        <input 
                        type="password"
                        id="password"
                        value= {password}
                        onChange={e => setPassword(e.target.value)}
                        
                        
                        
                        />

                        <br/>
                        
                <button type= "Submit"> SignUp </button>
                <br/><br/>{errors}
                
            </form>

        </div>


    )


}

export default SignUpForm