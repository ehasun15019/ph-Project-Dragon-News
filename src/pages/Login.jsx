import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {

  const {signInUserFunction} = use(AuthContext);

  //handle login functionality 
  const handleFunctionality = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    signInUserFunction(email, password)
    .then((getUser) => {
      console.log(getUser.user)
      alert('login successfully');
      e.target.reset();
    })
    .catch((error) => {
      console.log(error)
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

        <form className="card-body" onSubmit={handleFunctionality}>
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
