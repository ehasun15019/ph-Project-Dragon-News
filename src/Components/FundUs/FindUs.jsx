import React from 'react'
import Title from '../Title.jsx/Title'
import SocialButtons from './SocialButtons'

const FindUs = () => {
  return (
    <div className='mt-6'>
      <Title  title1={<>Find on us</>} />

      <div className='mt-3'>
        <SocialButtons />
      </div>
    </div>
  )
}

export default FindUs
