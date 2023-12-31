import React from 'react'
import Hero from '../components/Hero'
import Catagories from '../components/Catagories'
import Forhome from '../components/Forhome'
import StateHome from '../components/StateHome'

const Home = () => {
  return (
    <div>
      <Hero/>
      <StateHome/>
      <div className="flex flex-col text-center w-full mt-20">
        {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2> */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
    </div>
      <Forhome/>
    <Catagories/>
    
    </div>
  )
}

export default Home
