/* eslint-disable no-unused-vars */
import React, { useState } from "react";
function HookCounter_Three() {
  const [name, setName] = useState({ firstName: "", LastName: "" });
 
  return (
    <form >
      <input
        type="text"
        value={name.firstName}
        placeholder="Enter First name"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.LastName}
        placeholder="Enter Last name"
        onChange={(e) => setName({ ...name, LastName: e.target.value })}
      />
      <h2>Your First Name is : {name.firstName}</h2>
      <h2>Your Last Name is : {name.LastName}</h2>
      <h2>Your Full Name is :{JSON.stringify(name)}</h2>
    </form>
  );
}
export default HookCounter_Three;
