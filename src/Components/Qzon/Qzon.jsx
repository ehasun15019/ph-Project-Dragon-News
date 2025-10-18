import React from 'react'
import Title from '../Title.jsx/Title'
import swiming from "../../assets/swimming.png"
import classes from "../../assets/class.png"
import playground from "../../assets/playground.png"
import bg from "../../assets/bg.png"


const Qzon = () => {
  return (
    <div className='bg-base-200 p-3'>
      <Title title1={<>Q-Zone</>} />

      <div className='flex flex-col justify-center items-center gap-3'>
        <img src={swiming} alt="" />
        <img src={classes} alt="" />
        <img src={playground} alt="" /> 
        <img src={bg} alt="" /> 
      </div>
    </div>
  )
}

export default Qzon
