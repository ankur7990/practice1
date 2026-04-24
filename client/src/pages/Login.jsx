import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h1>Login Page</h1>

      <input placeholder="Email" />
      <br />
      <br />

      <input placeholder="Password" type="password" />
      <br />
      <br />

      <button>Login</button>
    </div>
  );
};

export default Login;
