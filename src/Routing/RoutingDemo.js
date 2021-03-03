import React from "react";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import AboutUs from "./AboutUs";
import Home from "./Home";
import ContactUs from "./ContactUs";
import EmployeeDetails from "./EmployeeDetails"
import PageNotFound from "./PageNotFound";

function RouteDemo() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            ThinkQuotient software pvt ltd{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link exact to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link to="/emp">Employee</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/emp" component={EmployeeDetails}/>
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default RouteDemo;
