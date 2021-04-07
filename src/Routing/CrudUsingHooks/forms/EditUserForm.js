import React, { useState, useEffect } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="card">
      <form
       onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
       
      >
        <h5 className="card-title"> Add User </h5>
        <article class="card-body">
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
          <h6>
          Select Role Of Employee :</h6>
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
            {/* <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Save
            </Button> */}
            <button  className="btn btn-outline-primary">Update user</button>
          </div>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => props.setEditing(false)}
          >
            cancel
          </Button>
        </article>
      </form>
    </div>
  );
};

export default EditUserForm;
