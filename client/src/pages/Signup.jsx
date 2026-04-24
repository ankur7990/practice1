import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <h1>Signup</h1>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label htmlFor="email">Name</label>
          <input type="email" name="email" placeholder="Enter Your email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
          />
        </div>
        <button>Signup</button>
        <span>
          Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
