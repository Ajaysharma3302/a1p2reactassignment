// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn?"hello,User!":"Acess Denied"}</div>;
}

export default LoginMessage;
