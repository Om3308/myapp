import React, { useState } from "react";
import Authonticate from "./Authonticate";
import AuthContext from "./AuthContext";

const DemoContext = () => {
  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };
  return (
    <div>
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
        <Authonticate />
      </AuthContext.Provider>
    </div>
  );
};
export default DemoContext;
