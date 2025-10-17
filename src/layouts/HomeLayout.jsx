import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'

const HomeLayout = () => {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main">
        <section className="left-nav"></section>

        <section className="main">
            <Outlet></Outlet>
        </section>
        
        <section className="right-nav"></section>
      </div>
    </div>
  )
}

export default HomeLayout
