import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom';


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
        

    

}

export default Employees