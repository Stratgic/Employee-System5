import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department } from './Department'; 
import {Employee} from './Employee';
import { BrowserRouter, Route, Switch, NavLink} from "react-router-dom";


function App() {
  return (
    <BrowseRouter>
    <div className="App container">
      <h3 className = "d—flex justify-content-center m-3"> 
        React js Frontend 
   
      </h3>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-ite- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home"></NavLink>
            Home
          </li>
          <li className="nav-ite- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee"></NavLink>
            Employee
          </li>
          <li className="nav-ite- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department"></NavLink>
            Department
          </li>
          </ul>
      </nav>

      <Switch>
         <Route path='/home' component={Home}/>
         <Route path='/department' component={Department}/>
         <Route path='/employee' component={Employee}/>
      </Switch>
    </div>
    </BrowseRouter>
  );
}

export default App;
