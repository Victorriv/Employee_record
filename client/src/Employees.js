import React, {useEffect, useState} from "react"


function Employees() {
    const[employees, setEmployees] = useState([])

    useEffect(()=> {
        fetch(`/users/${user.id}`)
        .then((r) => r.json())
        .then((d) => {
            setDogs(d.employees)
        })
    }, [])  



    return (
        <h1> Employees </h1>


    )

}

export default Employees