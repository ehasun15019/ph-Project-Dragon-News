import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {

  const {signInUserFunction} = use(AuthContext);

  const [error, setError] = useState("");

  // redirect functionality 
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.state?.redirect?.pathname || "/";

  //handle login functionality 
  const handleLoginFunctionality = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    signInUserFunction(email, password)
    .then((getUser) => {
      console.log(getUser.user)
      alert('login successfully');
      e.target.reset();
      
      navigate(redirect, {replace: true})
    })
    .catch((error) => {
      console.log(error);
      setError("correct your email or password")
    })
  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-center py-3 pt-6">
            Login your account
          </h2>
        </div>

        <form className="card-body" onSubmit={handleLoginFunctionality}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label> 
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </fieldset>

          {
            error && <p className="text-red-600">{error}</p>
          }

          <div className="text-center pt-3">
            <p>
              Don't Have An Account ?{" "}
              <Link className="text-red-500" to="/auth/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
