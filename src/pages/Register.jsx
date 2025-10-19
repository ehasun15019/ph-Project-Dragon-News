import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-center py-3 pt-6">
            Register your account
          </h2>
        </div>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Email</label>
            <input 
                type="text" 
                className="input" 
                placeholder="Name" 
                name="name"
            />

            {/* Photo Url */}
            <label className="label">Photo Url</label>
            <input 
                type="text" 
                className="input" 
                placeholder="Photo Url" 
                name="password"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input 
                type="email" 
                className="input" 
                placeholder="Email" 
                name="email"
            />

            {/* Password */}
            <label className="label">Password</label>
            <input 
                type="password" 
                className="input" 
                placeholder="Password" 
                name="password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>

          <div className="text-center pt-3">
            <p>
               Have An Account ? please{" "}
              <Link className="text-red-500" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
