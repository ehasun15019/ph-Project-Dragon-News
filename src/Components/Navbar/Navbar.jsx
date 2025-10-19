import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../Provider/AuthContext'

const Navbar = () => {

  const {user, signOutFunction} = use(AuthContext);

  // handleSignOut 
  const handleSignOut = () => {
    signOutFunction()
    .then(() => {
      alert("sign out successfully")
    })
    .catch((error) => {
      console.log(error) 
    })
  }

  return (
    <div className='flex justify-between items-center'>
     <div className=''>
      {
        user && user.email
      }
     </div>

      <div className="nav flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login flex gap-4">
        <img src={userIcon} alt="" />

        {
          user ? 
          <button onClick={handleSignOut} className='btn bg-primary text-white px-6'>LogOut</button>
          : 
          <Link to="/auth/login" className='btn bg-primary text-white px-6'>Login</Link>
        }
      </div>
    </div>
  )
}

export default Navbar
