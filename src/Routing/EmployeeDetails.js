import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Employee from './Employee'

class EmployeeDetails extends Component {
    render() {
        return (
            <div>
                <h1> list of employees </h1>
                <ul>
                    <li><NavLink to='/emp/1'> Amol</NavLink> </li>
                    <li><NavLink to='/emp/2'> Jay</NavLink> </li>
                    <li><NavLink to='/emp/3'> Anamika</NavLink> </li>
                    <li><NavLink to='/emp/4'> Sansa</NavLink> </li>
                </ul>
                <Route path='/emp/:id' component={Employee}></Route>
            </div>
        )
    }
}

export default EmployeeDetails
