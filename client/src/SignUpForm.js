import React, {useState} from "react"


function SignUpForm(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


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
            console.log(r)
             r.json().then(user => setUser(user));

         });
    }





}