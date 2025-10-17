import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'
import LatestNews from '../Components/LatestNews/LatestNews'
import Navbar from '../Components/Navbar/Navbar'

const HomeLayout = () => {
  return (
    <div>
      <div className="header">
        <Header></Header>
        
        <section className='w-11/12 mx-auto my-3'>
            <LatestNews></LatestNews>
        </section>

        <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
        </nav>
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
