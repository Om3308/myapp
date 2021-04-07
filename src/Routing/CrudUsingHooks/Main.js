import React, { useState } from "react";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";
import LoginForm from "./Login";
import Admin from "./Admin";
import PageNotFound from "../PageNotFound";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <Route path="/admin" component={Admin} />
          <Route path="/logout" component={LoginForm} />
          {/* <Route path="/AddUserForm" render={()=><AddUserForm addUser={addUser} /> } /> */}
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Main;
