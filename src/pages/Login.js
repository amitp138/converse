import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Login = () => {
  const navigate = useNavigate();
  const [err, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Converse</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
          {err && <span>Some error occured</span>}
        </form>
        <p>
          Don't have an account?<Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
