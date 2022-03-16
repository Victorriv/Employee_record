import './App.css';
import EmployeeCard from './EmployeeCard';
//import {useState, useEffect} from "react";
import Employees from './Employees';
import EmployeeForm from './EmployeeForm'

function App() {
  const [user, setUser] = useState("")


  if (!user) return <Login setUser ={setUser} /> 
  return (
    <div className= "App">
    <main>
     <Switch>
            <Route exact path ="/">
            <Employees user={user}/>
          
            <button onClick={handleLogout}> Logout </button>
           </Route>
            <Route exact path="/new"></Route>
           <Route exact path="/about">
           <About/>
           
          </Route>

      </Switch>
    </main>
    
    </div>
    
  );
}

export default App;
