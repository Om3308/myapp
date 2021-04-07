import React, { Component } from "react";
import data from "./logindata";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import "./Styles/Style1.css";
// import Admin from './Admin';
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isloggedin: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setdata(obj){
    sessionStorage.setItem("data",JSON.stringify(obj))
    this.setState({
      isloggedin: true,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    data.map((d) => {
      if (d.name === username && d.password === password) {
       return swal("Good job!", "Login Successful!", "success").then(()=>this.setdata(d)) 
      } 
    });
  };

  handledata = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    if (this.state.isloggedin) {
      return <Redirect to="/Admin" />;
    }
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handledata}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={this.state.password}
              onChange={this.handledata}
              required="required!"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
