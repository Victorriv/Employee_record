import React from "react"
import {NavLink} from 'react-router-dom'

function NavBar({onLogout}){


  function handleLogout() {
    fetch("/logout", {
    method: "DELETE",
    }).then(() => onLogout());
  }


    return(
        <div className="NavBar">
          <NavLink style={{ marginRight: '10px'}} to='/'>Home</NavLink>
          <NavLink style={{ marginRight: '10px'}} to='/about'>About</NavLink>  
          <NavLink onClick={handleLogout} style={{ marginRight: '10px'}} to='/'>Logout</NavLink>
        </div>
        )




}





export default NavBar