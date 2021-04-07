import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import Data from "./logindata";
import "./Styles/Style1.css"
const Admin = () => {
  // Data
  // const usersData = [
  //   { id: 1, name: "ABC", email: "abc@gmail.com",role:"SoftWare Developer",password:"Abc" },
  //   { id: 2, name: "XYZ", email: "xyz@gmail.com",role:"Project Manager",password:"Xyz" },
  //   { id: 3, name: "LMN", email: "abc@gmail.com",role:"SoftWare Developer",password:"Lmn" },
  // ];

  const initialFormState = { id: null, name: "", email: "", role: "" };
  

  // Setting state
  const [users, setUsers] = useState(Data);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };
  const Header = () => {
    var obj = JSON.parse(sessionStorage.getItem("data"));
    return (
      <nav className="navbar navbar-expand-lg bg-light">
       
          <ul className="navbar-nav">
            <li className="nav-item">Welcome {obj.name}</li>

            <li  id="nav-item">
              <NavLink  exact to="/">
                LogOut
              </NavLink>
            </li>
          </ul>
        
      </nav>
    );
  };

  return (
    <div className="container" >
      <Header />
      <div className="flex-row">
        <div className="flex-large" >
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : 
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
    
  );
};

export default Admin;
