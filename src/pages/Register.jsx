import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {

  const {createUserFunction, setUser} = use(AuthContext);

  /* handle Register functionality start */
  const handleRegister = (e) => {
    e.preventDefault();

    const from = e.target;
    const name = from.name.value;
    const Photo = from.Photo.value;
    const email = from.email.value;
    const password = from.password.value;

    console.log(name,Photo,email,password);

    createUserFunction(email, password)
    .then((newUser) => {
      console.log(newUser.user)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }
  /* handle Register functionality End */


  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div>
          <h2 className="text-2xl font-semibold text-center py-3 pt-6">
            Register your account
          </h2>
        </div>


        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input 
                type="text" 
                className="input" 
                placeholder="Name" 
                name="name"
                required
            />

            {/* Photo Url */}
            <label className="label">Photo Url</label>
            <input 
                type="text" 
                className="input" 
                placeholder="Photo" 
                name="Photo"
                required
            />

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

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
          </fieldset>

          <div className="text-center pt-3">
            <p>
               Have An Account ? please{" "}
              <Link className="text-red-500" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
