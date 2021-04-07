import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import data from "../logindata"

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", email: "", role: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="card">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.email ||!user.role) return;
          // data.push(user);
          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <h5 className="card-title"> Add User </h5>
        <article className="card-body">
          <h6 className="card-subtitle"> Name</h6>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <h6 className="card-subtitle"> Email </h6>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <h6>Select Role Of Employee :</h6>
          </div>
          <div className="form-group">
            <select name="role" value={user.role} onChange={handleInputChange}>
              <option value="software developer">software Developer</option>
              <option value="Tester">Tester</option>
              <option value="Project Leader">Project Leader</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>

          <div className="form-group">
            {/* <Button variant="contained" color="primary">Add New User</Button> */}
            <button className="btn btn-secondary">Add new user</button>
          </div>
        </article>
      </form>
    </div>
  );
};

export default AddUserForm;
