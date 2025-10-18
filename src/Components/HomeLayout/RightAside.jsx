import React from 'react'
import SocialLogin from '../SocialLogin/SocialLogin'
import FindUs from '../FundUs/FindUs'
import Qzon from '../Qzon/Qzon'

const RightAside = () => {
  return (
    <div className='space-y-5'>
      <SocialLogin />
      <FindUs/>
      <Qzon />
    </div>
  )
}

export default RightAside
