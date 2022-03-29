import './App.css';
import LoginForm from "./LoginForm"
import {useState, useEffect} from "react";
import Employees from './Employees';
import { Route, Switch} from 'react-router-dom';
import About from "./About"
import NavBar from './NavBar';

function App() {
  const [user, setUser] = useState("")


  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))}
      }
      )
    }, []);

 

  function onLogout(){
    setUser(null)
  }
  



  if (!user) return <LoginForm setUser ={setUser} /> 
  return (
    <div className= "App">
    <main>

    <div>
       <nav> 
          <NavBar  onLogout={onLogout} /> 
      
       </nav>
       </div>

     <Switch>

            <Route exact path ="/">
            <Employees user={user}/>
          
            {/* <button onClick={handleLogout}> Logout </button> */}
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
