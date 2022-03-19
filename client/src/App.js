import './App.css';
import LoginForm from "./LoginForm"
import {useState, useEffect} from "react";
import Employees from './Employees';
import { Route, Switch} from 'react-router-dom';
import About from "./About"

function App() {
  const [user, setUser] = useState("")


  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))}
      }
      )
    }, []);

  function handleLogout(){
    fetch("/logout", {method: "DELETE"}).then(r => {
      setUser(null)
    })
  }



  if (!user) return <LoginForm setUser ={setUser} /> 
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
