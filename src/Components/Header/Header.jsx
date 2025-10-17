import React from 'react'
import logo from "../../assets/logo.png"
import { format } from 'date-fns'

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center my-6'>
      <img src={logo} alt="" />

      <p className='text-accent'>Journalism Without Fear or Favour</p>

      {/* day date */}
      <p>
        {
            format(new Date(), "EEEE , MMMM dd, yyyy",)
        }
      </p>
    </div>
  )
}

export default Header
