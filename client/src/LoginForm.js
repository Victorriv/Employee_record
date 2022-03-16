import React, {useState} from "react"


function LoginForm(){
    const [username, setUserName] = useState("")


    function handleSubmit(e){
        e.preventDefault() // stops submit request
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            console.log(r)
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
        </div>
    )

}


