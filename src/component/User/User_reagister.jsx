import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import axios from "axios";

function User_signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [userMsg, setUserMsg] = useState("");
  const [userClass, setUserClass] = useState("");

  const formik = useFormik({
    initialValues: {
      user_id: "",
      user_name: "",
      password: "",
      mobile: "",
    },
    onSubmit: async (values) => {
      try {
        // Post new user
        const response = await axios.post(
          "https://my-json-server.typicode.com/rnitesh4445/E-learning/users",
          values
        );
        // Update local state
        setUser([...user, response.data]);
        alert("Sign-up successful!");
        navigate("/user-login");
      } catch (error) {
        console.error("Error signing up:", error);
        alert("Sign-up failed, try again.");
      }
    },
  });

  const verify = (e) => {
    const exists = user.some((u) => u.user_id === e.target.value);
    if (exists) {
      setUserMsg("User ID Taken - Try Another");
      setUserClass("text-danger");
    } else {
      setUserMsg("User ID Available");
      setUserClass("text-success");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "380px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4">User Sign Up</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="user_id" className="form-label">
              User ID
            </label>
            <input
              type="text"
              id="user_id"
              name="user_id"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.user_id}
              onKeyUp={verify}
              required
            />
            <p className={userClass}>{userMsg}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="user_name" className="form-label">
              User Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.user_name}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="form-control"
              maxLength="10"
              onChange={formik.handleChange}
              value={formik.values.mobile}
              required
            />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button type="submit" className="btn btn-success px-4">
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-secondary px-4"
              onClick={() => navigate("/user-login")}
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User_signup;
