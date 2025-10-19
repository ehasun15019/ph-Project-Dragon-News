import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
            <h2 className="text-2xl font-semibold text-center py-3 pt-6">Login your account</h2>
        </div>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>

          <div className="text-center pt-3">
            <p>Don't Have An Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
