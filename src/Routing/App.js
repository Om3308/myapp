import React from 'react';
import './App.css';
import { BrowserRouter,Route, Link, NavLink, Switch } from 'react-router-dom'
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';
import Employee from './Components/Employee';
import EmployeeDetails from './Components/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <h1> welcome to react js Routing </h1>


      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">ThinkQuotient software pvt ltd </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/about">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/contact">Contact us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/emp">Employee</NavLink>
              </li>
            </ul>
          </div>
        </nav>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/about" component={AboutUs}/>
<Route path="/contact" component={ContactUs}/>
<Route path="/emp" component={EmployeeDetails}/>
<Route component={PageNotFound}/>
</Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
