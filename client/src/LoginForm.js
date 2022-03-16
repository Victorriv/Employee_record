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

        <div></div>
    )

}


