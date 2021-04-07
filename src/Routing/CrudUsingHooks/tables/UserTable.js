import React from "react";
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const UserTable = (props) => (
  <div className="card"  style={{width: "70rem"}}>
  <table className="table table-striped table-light table-hover table table-bordered ">
    <thead>
      <tr>
        <th scope="col" className="centerAll">
          Name
        </th>
        <th scope="col" className="centerAll">
          Email
        </th>
        <th scope="col" className="centerAll">
          Role
        </th>
        <th scope="col" className="centerAll">
          Actions
        </th>
      </tr>
    </thead>
    
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td className="centerAll">{user.name}</td>
            <td className="centerAll">{user.email}</td>
            <td className="centerAll">{user.role}</td>
            <td>
            
              <EditIcon fontSize="large"
                onClick={() => {
                  props.editRow(user);
                }}
                
              />
              
              <DeleteIcon fontSize="large"
                onClick={() => props.deleteUser(user.id)}
                className="text-danger"
              />
             
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="centerAll" colSpan={3}>
            No users
          </td>
        </tr>
      )}
    </tbody>
    
  </table>
  </div>
);

export default UserTable;
